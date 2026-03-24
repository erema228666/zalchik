CREATE TABLE "products" (
	"id" varchar(255) PRIMARY KEY NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"deleted_at" timestamp,
	"name" varchar(30) NOT NULL,
	"content" text NOT NULL,
	"type" varchar(100) NOT NULL,
	"price" varchar
);
