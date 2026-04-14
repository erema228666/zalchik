CREATE TABLE "AboutUsDynamic" (
	"id" varchar(255) PRIMARY KEY NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"deleted_at" timestamp,
	"text" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "AboutUsTapInto" (
	"id" varchar(255) PRIMARY KEY NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"deleted_at" timestamp,
	"text" text NOT NULL
);
