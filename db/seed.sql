\c shows_dev;

INSERT INTO shows (image, title, genre, release_date, season_count, episode_count, cast_members, director, is_favorite) VALUES
('https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSkvHYFHnrJHQ-sUGFXwm9B6U_jeIM1kce3pJOKAqwEabkw-8wJ', 'You', 'Psychological thriller', '2018-09-09', 4, 30, 'Penn Badgley as Joe Goldberg , Victoria Pedretti as Love Quinn , Tati Gabrielle as Marienne Bellamy , Ambyr Childers as Candace Stone ', '
Greg Berlanti, Sera Gamble' , true),
('https://www.tvguide.com/a/img/catalog/provider/1/1/1-6482810627.jpg', 'The Big Bang Theory','Comedy', '2007-09-24', 12, 279, 'Jim Parsons as Sheldon Cooper , Kaley Cuoco as Penny,  Johnny Galecki as Leonard, Simon Helberg as Howard, Mayim Bialik as Amy Farrah, Kunal Nayyar as Raj Koothrappali', 'Mark Cendrowski', true ),
('https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSD1uNc4raxAtNMZPEILrMpcX3miCb310jxcLQnptPoB4k9Knzl', 'Shameless', 'Comedy, Drama', '2011-09-01', 11, 134, 'William H. Macy, Emmy Rossum, Ethan Cutkosky', 'John Wells', true ),
('https://flxt.tmsimg.com/assets/p10426936_b_v13_am.jpg','Power','Crime-Drama','2014-06-07', 6, 63,'Omari Hardwick, Lela Loren ...','Courtney Kemp Agboh', true ),
('https://i0.wp.com/thsindex.org/wp-content/uploads/2023/04/Money-Heist-was-first-released-on-Antena-3-in-Spain-in-2017-Netflix.jpg?fit=1920%2C2560&ssl=1','Money Heist','Crime-Drama', '2017-05-02', 5, 50, 'Úrsula Corberó, Álvaro Morte ...', 'Álex Pina', true),
('https://www.exploregeorgia.org/sites/default/files/legacy_images/vampire-diaries-cover-1485275999.jpg', 'Vampire Diaries', 'Supernatural-Drama', '2009-09-10', 8, 171, 'Nina Dobrev, Paul Wesley ...','Julie Plec', false),
('https://resizing.flixster.com/0xxuABVVuzJrUT130WFHKE-irEg=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vNzUyMTFhOTktZTU4Ni00ODkyLWJlYjQtZTgxYTllZmU2OGM0LmpwZw==', 'Stranger Things','Science Fiction - Horror', '2016-07-15', 4, 34,'Winona Ryder, David Harbour ...', 'The Duffer Brothers', false),
('https://cdn1.edgedatg.com/aws/v2/abc/GreysAnatomy/showimages/bc63a41f8240b37008eef4c3afaca6f4/1600x900-Q90_bc63a41f8240b37008eef4c3afaca6f4.jpg','Greys Anatomy', 'Drama - Medical','2005-03-27', 18, 384,'Ellen Pompeo, Sandra Oh ...', 'Shonda Rhimes', false),
('https://images.paramount.tech/uri/mgid:arc:imageassetref:comedycentral.com:331a611a-fd48-4bbc-83d0-b6e5aabbbc0f?quality=0.7&gen=ntrn&legacyStatusCode=true','Key & Peele','Sketch Comedy',' 2012-01-31', 5, 54,'Keegan-Michael Key, Jordan Peele ','Peter Atencio',true ),
('https://www.syfy.com/sites/syfy/files/styles/scale_1280/public/8423a603-e69a-20fe-28c9-0b3b53fb3c61.jpg','The Walking Dead','Horror - Drama',' 2010-10-31', 11, 177, 'Andrew Lincoln, Norman Reedus ...', 'Frank Darabont', true );




INSERT INTO reviews (show_id, reviewer, title, content, rating ) VALUES 
('1', 'Evan', 'Nice Show', 'So suspensful!!!!', 7),
('9', 'Karlie', 'My Favorite', 'Has me laughing everytime I watch', 8),
('3', 'Manny', 'Amazing', 'This show crushes it when it comes to keeping me entertained', 8);