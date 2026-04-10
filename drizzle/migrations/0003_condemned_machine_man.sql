ALTER TABLE "DynamicOpenGym" ADD COLUMN "id" varchar(255) PRIMARY KEY NOT NULL;--> statement-breakpoint
ALTER TABLE "DynamicOpenGym" ADD COLUMN "created_at" timestamp DEFAULT now();--> statement-breakpoint
ALTER TABLE "DynamicOpenGym" ADD COLUMN "deleted_at" timestamp;--> statement-breakpoint
ALTER TABLE "ForTheCommited" ADD COLUMN "id" varchar(255) PRIMARY KEY NOT NULL;--> statement-breakpoint
ALTER TABLE "ForTheCommited" ADD COLUMN "created_at" timestamp DEFAULT now();--> statement-breakpoint
ALTER TABLE "ForTheCommited" ADD COLUMN "deleted_at" timestamp;--> statement-breakpoint
ALTER TABLE "GuidedByExperts" ADD COLUMN "id" varchar(255) PRIMARY KEY NOT NULL;--> statement-breakpoint
ALTER TABLE "GuidedByExperts" ADD COLUMN "created_at" timestamp DEFAULT now();--> statement-breakpoint
ALTER TABLE "GuidedByExperts" ADD COLUMN "deleted_at" timestamp;--> statement-breakpoint
ALTER TABLE "JoinTheCommunity" ADD COLUMN "id" varchar(255) PRIMARY KEY NOT NULL;--> statement-breakpoint
ALTER TABLE "JoinTheCommunity" ADD COLUMN "created_at" timestamp DEFAULT now();--> statement-breakpoint
ALTER TABLE "JoinTheCommunity" ADD COLUMN "deleted_at" timestamp;--> statement-breakpoint
ALTER TABLE "OpeningHours" ADD COLUMN "id" varchar(255) PRIMARY KEY NOT NULL;--> statement-breakpoint
ALTER TABLE "OpeningHours" ADD COLUMN "created_at" timestamp DEFAULT now();--> statement-breakpoint
ALTER TABLE "OpeningHours" ADD COLUMN "deleted_at" timestamp;--> statement-breakpoint
ALTER TABLE "contact" ADD COLUMN "id" varchar(255) PRIMARY KEY NOT NULL;--> statement-breakpoint
ALTER TABLE "contact" ADD COLUMN "created_at" timestamp DEFAULT now();--> statement-breakpoint
ALTER TABLE "contact" ADD COLUMN "deleted_at" timestamp;