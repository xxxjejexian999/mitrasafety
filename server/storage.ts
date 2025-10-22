import { db } from "./db";
import { 
  type User, 
  type InsertUser, 
  type Product, 
  type InsertProduct,
  type Category,
  type InsertCategory,
  type Order,
  type InsertOrder,
  users,
  products,
  categories,
  orders
} from "@shared/schema";
import { eq, and, gte, lte, sql, like } from "drizzle-orm";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getAllProducts(): Promise<Product[]>;
  getProduct(id: string): Promise<Product | undefined>;
  getProductsByCategory(category: string): Promise<Product[]>;
  searchProducts(params: {
    query?: string;
    categories?: string[];
    minPrice?: number;
    maxPrice?: number;
    inStockOnly?: boolean;
  }): Promise<Product[]>;
  createProduct(product: InsertProduct): Promise<Product>;
  
  getAllCategories(): Promise<Category[]>;
  getCategory(id: string): Promise<Category | undefined>;
  createCategory(category: InsertCategory): Promise<Category>;
  updateCategoryProductCount(categoryId: string, count: number): Promise<void>;
  
  createOrder(order: InsertOrder): Promise<Order>;
  getOrder(id: string): Promise<Order | undefined>;
}

export class DbStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.id, id));
    return result[0];
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.username, username));
    return result[0];
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const result = await db.insert(users).values(insertUser).returning();
    return result[0];
  }

  async getAllProducts(): Promise<Product[]> {
    return await db.select().from(products);
  }

  async getProduct(id: string): Promise<Product | undefined> {
    const result = await db.select().from(products).where(eq(products.id, id));
    return result[0];
  }

  async getProductsByCategory(category: string): Promise<Product[]> {
    return await db.select().from(products).where(eq(products.category, category));
  }

  async searchProducts(params: {
    query?: string;
    categories?: string[];
    minPrice?: number;
    maxPrice?: number;
    inStockOnly?: boolean;
  }): Promise<Product[]> {
    let conditions = [];

    if (params.query) {
      conditions.push(like(products.name, `%${params.query}%`));
    }

    if (params.categories && params.categories.length > 0) {
      const categoryConditions = params.categories.map(cat => eq(products.category, cat));
      conditions.push(sql`(${categoryConditions.join(' OR ')})`);
    }

    if (params.minPrice !== undefined) {
      conditions.push(gte(products.price, params.minPrice));
    }

    if (params.maxPrice !== undefined) {
      conditions.push(lte(products.price, params.maxPrice));
    }

    if (params.inStockOnly) {
      conditions.push(eq(products.inStock, true));
    }

    if (conditions.length === 0) {
      return await db.select().from(products);
    }

    return await db.select().from(products).where(and(...conditions));
  }

  async createProduct(product: InsertProduct): Promise<Product> {
    const result = await db.insert(products).values(product).returning();
    return result[0];
  }

  async getAllCategories(): Promise<Category[]> {
    return await db.select().from(categories);
  }

  async getCategory(id: string): Promise<Category | undefined> {
    const result = await db.select().from(categories).where(eq(categories.id, id));
    return result[0];
  }

  async createCategory(category: InsertCategory): Promise<Category> {
    const result = await db.insert(categories).values(category).returning();
    return result[0];
  }

  async updateCategoryProductCount(categoryId: string, count: number): Promise<void> {
    await db.update(categories)
      .set({ productCount: count })
      .where(eq(categories.id, categoryId));
  }

  async createOrder(order: InsertOrder): Promise<Order> {
    const result = await db.insert(orders).values(order).returning();
    return result[0];
  }

  async getOrder(id: string): Promise<Order | undefined> {
    const result = await db.select().from(orders).where(eq(orders.id, id));
    return result[0];
  }
}

export class MemStorage implements IStorage {
  private users: User[] = [];
  private products: Product[] = [];
  private categories: Category[] = [];
  private orders: Order[] = [];

  async getUser(id: string): Promise<User | undefined> {
    return this.users.find(u => u.id === id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return this.users.find(u => u.username === username);
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const user: User = {
      id: crypto.randomUUID(),
      ...insertUser,
    };
    this.users.push(user);
    return user;
  }

  async getAllProducts(): Promise<Product[]> {
    return [...this.products];
  }

  async getProduct(id: string): Promise<Product | undefined> {
    return this.products.find(p => p.id === id);
  }

  async getProductsByCategory(category: string): Promise<Product[]> {
    return this.products.filter(p => p.category === category);
  }

  async searchProducts(params: {
    query?: string;
    categories?: string[];
    minPrice?: number;
    maxPrice?: number;
    inStockOnly?: boolean;
  }): Promise<Product[]> {
    let results = [...this.products];

    if (params.query) {
      const query = params.query.toLowerCase();
      results = results.filter(p => 
        p.name.toLowerCase().includes(query) || 
        p.description.toLowerCase().includes(query)
      );
    }

    if (params.categories && params.categories.length > 0) {
      results = results.filter(p => params.categories!.includes(p.category));
    }

    if (params.minPrice !== undefined) {
      results = results.filter(p => p.price >= params.minPrice!);
    }

    if (params.maxPrice !== undefined) {
      results = results.filter(p => p.price <= params.maxPrice!);
    }

    if (params.inStockOnly) {
      results = results.filter(p => p.inStock);
    }

    return results;
  }

  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    const product: Product = {
      id: crypto.randomUUID(),
      originalPrice: null,
      inStock: true,
      badge: null,
      images: null,
      specifications: null,
      protectionLevels: null,
      complianceStandards: null,
      hazardClasses: null,
      optimizedMedia: null,
      ...insertProduct,
    };
    this.products.push(product);
    return product;
  }

  async getAllCategories(): Promise<Category[]> {
    return [...this.categories];
  }

  async getCategory(id: string): Promise<Category | undefined> {
    return this.categories.find(c => c.id === id);
  }

  async createCategory(insertCategory: InsertCategory): Promise<Category> {
    const category: Category = {
      productCount: 0,
      ...insertCategory,
    };
    this.categories.push(category);
    return category;
  }

  async updateCategoryProductCount(categoryId: string, count: number): Promise<void> {
    const category = this.categories.find(c => c.id === categoryId);
    if (category) {
      category.productCount = count;
    }
  }

  async createOrder(insertOrder: InsertOrder): Promise<Order> {
    const order: Order = {
      id: crypto.randomUUID(),
      createdAt: new Date(),
      status: "pending",
      customerEmail: null,
      ...insertOrder,
    };
    this.orders.push(order);
    return order;
  }

  async getOrder(id: string): Promise<Order | undefined> {
    return this.orders.find(o => o.id === id);
  }
}

export const storage = new MemStorage();
