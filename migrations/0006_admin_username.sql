ALTER TABLE user ADD COLUMN username TEXT;
ALTER TABLE user ADD COLUMN displayUsername TEXT;

CREATE UNIQUE INDEX IF NOT EXISTS user_username_unique ON user(username);

UPDATE user
SET username = 'malik', displayUsername = 'Malik'
WHERE lower(email) = 'fredrickowoeye8@gmail.com' AND role = 'admin';
