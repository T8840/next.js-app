CREATE TABLE profiles (
 id UUID PRIMARY KEY,
 first_name TEXT,
 last_name TEXT,
 avatar_url TEXT,
 updated_at TIMESTAMPTZ
);

CREATE TABLE chat_rooms (
 id SERIAL PRIMARY KEY,
 room_name TEXT,
 creator_id UUID,
 FOREIGN KEY (creator_id) REFERENCES profiles (id)

);

  

CREATE TABLE messages (
 id SERIAL PRIMARY KEY,
 content TEXT,
 room_id INTEGER,
 sender_id UUID,
 created_at TIMESTAMPTZ,
 FOREIGN KEY (room_id) REFERENCES chat_rooms (id),
 FOREIGN KEY (sender_id) REFERENCES profiles (id)

);


CREATE OR REPLACE FUNCTION public.get_messages(room_id_input INTEGER)
 RETURNS TABLE (
  id INTEGER,
  content TEXT,
  room_id INTEGER,
  sender_id UUID,
  created_at TIMESTAMPTZ
 )

AS $$

 SELECT m.id, m.content, m.room_id, m.sender_id, m.created_at
 FROM messages m
 WHERE m.room_id = room_id_input
 ORDER BY m.created_at ASC
$$ LANGUAGE sql STABLE;