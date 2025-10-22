import { sql } from "drizzle-orm";
import { mysqlTable, varchar, int, text, boolean, timestamp, json } from "drizzle-orm/mysql-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = mysqlTable("users", {
  id: varchar("id", { length: 36 }).primaryKey().$defaultFn(() => crypto.randomUUID()),
  username: varchar("username", { length: 255 }).notNull().unique(),
  password: varchar("password", { length: 255 }).notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export const categories = mysqlTable("categories", {
  id: varchar("id", { length: 255 }).primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  icon: varchar("icon", { length: 255 }).notNull(),
  productCount: int("product_count").notNull().default(0),
});

export const insertCategorySchema = createInsertSchema(categories);

export type InsertCategory = z.infer<typeof insertCategorySchema>;
export type Category = typeof categories.$inferSelect;

export const products = mysqlTable("products", {
  id: varchar("id", { length: 36 }).primaryKey().$defaultFn(() => crypto.randomUUID()),
  name: varchar("name", { length: 255 }).notNull(),
  description: text("description").notNull(),
  price: int("price").notNull(),
  originalPrice: int("original_price"),
  category: varchar("category", { length: 255 }).notNull(),
  imageUrl: varchar("image_url", { length: 500 }).notNull(),
  images: json("images"),
  inStock: boolean("in_stock").notNull().default(true),
  badge: varchar("badge", { length: 255 }),
  specifications: json("specifications"),
  protectionLevels: json("protection_levels"),
  complianceStandards: json("compliance_standards"),
  hazardClasses: json("hazard_classes"),
  optimizedMedia: json("optimized_media"),
});

export const insertProductSchema = createInsertSchema(products).omit({
  id: true,
});

export type InsertProduct = z.infer<typeof insertProductSchema>;
export type Product = typeof products.$inferSelect;

export const orders = mysqlTable("orders", {
  id: varchar("id", { length: 36 }).primaryKey().$defaultFn(() => crypto.randomUUID()),
  customerName: varchar("customer_name", { length: 255 }).notNull(),
  customerPhone: varchar("customer_phone", { length: 50 }).notNull(),
  customerEmail: varchar("customer_email", { length: 255 }),
  shippingAddress: text("shipping_address").notNull(),
  shippingProvince: varchar("shipping_province", { length: 255 }).notNull(),
  shippingCity: varchar("shipping_city", { length: 255 }).notNull(),
  shippingPostalCode: varchar("shipping_postal_code", { length: 20 }).notNull(),
  paymentMethod: varchar("payment_method", { length: 100 }).notNull(),
  subtotal: int("subtotal").notNull(),
  shipping: int("shipping").notNull(),
  total: int("total").notNull(),
  status: varchar("status", { length: 50 }).notNull().default("pending"),
  items: json("items").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const insertOrderSchema = createInsertSchema(orders).omit({
  id: true,
  createdAt: true,
});

export type InsertOrder = z.infer<typeof insertOrderSchema>;
export type Order = typeof orders.$inferSelect;
