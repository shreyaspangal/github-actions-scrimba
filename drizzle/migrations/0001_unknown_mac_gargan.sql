ALTER TABLE "subscribers" ADD COLUMN "email_address" varchar(254);--> statement-breakpoint
ALTER TABLE "subscribers" ADD CONSTRAINT "subscribers_email_address_unique" UNIQUE("email_address");