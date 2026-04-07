ALTER TABLE "SocialLinks" ADD COLUMN "id" varchar(255) PRIMARY KEY NOT NULL;--> statement-breakpoint
ALTER TABLE "SocialLinks" ADD COLUMN "created_at" timestamp DEFAULT now();--> statement-breakpoint
ALTER TABLE "SocialLinks" ADD COLUMN "deleted_at" timestamp;--> statement-breakpoint
ALTER TABLE "SocialLinks" ADD COLUMN "url" text NOT NULL;--> statement-breakpoint
ALTER TABLE "SocialLinks" DROP COLUMN "text";