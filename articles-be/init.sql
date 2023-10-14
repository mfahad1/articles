CREATE DATABASE IF NOT EXISTS articles;
USE articles;


CREATE TABLE IF NOT EXISTS Articles (
    id varchar(255) NOT NULL,
    name varchar(255) NOT NULL,
    description varchar(255) NOT NULL
);

INSERT INTO Articles (`id`, `name`, `description`) VALUES
('30eb8b8d9b20', 'The Art of Storytelling in Marketing', 'Learn the secrets of effective storytelling in marketing.'),
('7b84cafd903a', 'Effective Strategies for Content Creation', 'Discover the best practices for creating engaging content.'),
("4d01a3b98922", 'Investing in Stock Markets for Beginners', "A beginner\'s guide to investing in the stock market."),
("90363f1378eb", 'Healthy Recipes for a Busy Lifestyle', 'Delicious and healthy recipes for busy individuals.'),
("3833d63df6c3", 'Exploring National Geographic Wonders', 'Journey through the wonders of the world with National Geographic.'),
("12bfdeea1a4a", 'Mastering Data Analysis with Python', 'Unlock the power of data analysis using Python.'),
("90f6cc86ee9c", 'Sustainable Living for a Greener World', 'Learn how to live sustainably and protect the environment.'),
("d7ec7d6b2f90", 'Discovering the Wonders of Astronomy', 'Explore the mysteries of the universe and astronomy.'),
("7d8b1bc7f422", 'Travel Tips for Adventurous Souls', 'Tips and tricks for adventurous travel.'),
("66eab0d983ce", 'Ancient Civilizations: A Historical Journey', 'A fascinating journey through the history of ancient civilizations.'),
("5571f7292f06", 'Mindfulness Meditation and Stress Reduction', 'Achieve inner peace through mindfulness meditation.'),
("5eaa7b8a7197", 'Italian Cuisine: Pasta Perfection', 'Master the art of Italian pasta dishes.'),
("593c9e6d8d44", 'Photography Techniques for Beginners', 'Get started with photography using these beginner techniques.'),
("591df67d722f", 'Climate Change: The Urgent Challenge', 'Understand the urgency of addressing climate change.'),
("8194c0e1c3b6", 'Financial Planning for a Secure Retirement', 'Plan for a secure financial future and retirement.'),
("c4e0e144bdf1", 'Cryptocurrency and Blockchain Explained', 'A comprehensive guide to cryptocurrency and blockchain.'),
("7c8933c3e4a8", 'Adventure in National Parks', 'Embark on thrilling adventures in national parks.'),
("2d4b189249a2", 'Balancing Work and Wellness', 'Achieve work-life balance and wellness.'),
("fbc7c88511ec", 'Modern Art: A Journey Through Time', 'Explore the world of modern art and its evolution.'),
("672738c5e57d", 'Effective Communication Skills in the Digital Age', 'Enhance your communication skills for the digital era.');