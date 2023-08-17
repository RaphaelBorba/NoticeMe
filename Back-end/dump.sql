
 CREATE TABLE users (
	id serial NOT NULL,
	name TEXT NOT NULL,
	image_url TEXT NOT NULL,
	email TEXT NOT NULL UNIQUE,
	password TEXT NOT NULL,
	create_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	birthday DATE NOT NULL,
	CONSTRAINT "users_pk" PRIMARY KEY ("id")
);



CREATE TABLE posts (
	id serial NOT NULL,
	title TEXT NOT NULL,
	text TEXT NOT NULL,
	image_url TEXT,
	user_id integer NOT NULL,
	create_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT "posts_pk" PRIMARY KEY ("id")
);



CREATE TABLE likes (
	id serial NOT NULL,
	user_id integer NOT NULL,
	posts_id integer NOT NULL,
	create_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT "likes_pk" PRIMARY KEY ("id")
);



CREATE TABLE comments (
	id serial NOT NULL,
	comment TEXT NOT NULL,
	user_id integer NOT NULL,
	post_id integer NOT NULL,
	create_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT "comments_pk" PRIMARY KEY ("id")
);



CREATE TABLE shares (
	id serial NOT NULL,
	user_id integer NOT NULL,
	post_id integer NOT NULL,
	create_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT "shares_pk" PRIMARY KEY ("id")
);



CREATE TABLE tags (
	id serial NOT NULL,
	tag TEXT NOT NULL,
	post_id integer NOT NULL,
	create_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT "tags_pk" PRIMARY KEY ("id")
);



CREATE TABLE description (
	id serial NOT NULL,
	text TEXT NOT NULL,
	user_id integer NOT NULL,
	create_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT "description_pk" PRIMARY KEY ("id")
);

CREATE TABLE follows (
	id serial NOT NULL,
	user_following integer NOT NULL,
	user_followed integer NOT NULL,
	CONSTRAINT "follow_pk" PRIMARY KEY ("id")
)



ALTER TABLE "posts" ADD CONSTRAINT "posts_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("id");

ALTER TABLE "likes" ADD CONSTRAINT "likes_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("id");
ALTER TABLE "likes" ADD CONSTRAINT "likes_fk1" FOREIGN KEY ("posts_id") REFERENCES "posts"("id");

ALTER TABLE "comments" ADD CONSTRAINT "comments_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("id");
ALTER TABLE "comments" ADD CONSTRAINT "comments_fk1" FOREIGN KEY ("post_id") REFERENCES "posts"("id");

ALTER TABLE "shares" ADD CONSTRAINT "shares_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("id");
ALTER TABLE "shares" ADD CONSTRAINT "shares_fk1" FOREIGN KEY ("post_id") REFERENCES "posts"("id");

ALTER TABLE "tags" ADD CONSTRAINT "tags_fk0" FOREIGN KEY ("post_id") REFERENCES "posts"("id");

ALTER TABLE "description" ADD CONSTRAINT "description_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("id");

ALTER TABLE "follows" ADD CONSTRAINT "follows_fk0" FOREIGN KEY ("user_following") REFERENCES "users"("id");
ALTER TABLE "follows" ADD CONSTRAINT "follows_fk1" FOREIGN KEY ("user_followed") REFERENCES "users"("id");