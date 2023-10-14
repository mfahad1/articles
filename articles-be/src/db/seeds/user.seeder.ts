import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { Articles } from '../../articles/articles.entity';

export default class UserSeeder implements Seeder {
  public async run(dataSource: DataSource): Promise<void> {
    await dataSource.query('TRUNCATE "user" RESTART IDENTITY;');

    const repository = dataSource.getRepository(Articles);
    await repository.insert([
      {
        id: '28d6bf18-4997-478d-bf95-12bfdeea1a4a',
        name: 'Mastering Data Analysis with Python',
        description: 'Unlock the power of data analysis using Python.',
      },
      {
        id: '39cc7ebf-82d1-4d05-96fc-2d4b189249a2',
        name: 'Balancing Work and Wellness',
        description: 'Achieve work-life balance and wellness.',
      },
      {
        id: '452c99e5-7b5f-4d92-8ef4-90363f1378eb',
        name: 'Healthy Recipes for a Busy Lifestyle',
        description: 'Delicious and healthy recipes for busy individuals.',
      },
      {
        id: '51bc02ec-6c95-4fcd-916f-5571f7292f06',
        name: 'Mindfulness Meditation and Stress Reduction',
        description: 'Achieve inner peace through mindfulness meditation.',
      },
      {
        id: '527429e6-72d0-4f50-90db-591df67d722f',
        name: 'Climate Change: The Urgent Challenge',
        description: 'Understand the urgency of addressing climate change.',
      },
      {
        id: '6b0b4ee9-8d0c-4e25-8317-66eab0d983ce',
        name: 'Ancient Civilizations: A Historical Journey',
        description:
          'A fascinating journey through the history of ancient civilizations.',
      },
      {
        id: '6ecfb9d5-052a-47a9-9a5d-c4e0e144bdf1',
        name: 'Cryptocurrency and Blockchain Explained',
        description: 'A comprehensive guide to cryptocurrency and blockchain.',
      },
      {
        id: '8d70cbe6-0d20-42d2-b1f6-7d8b1bc7f422',
        name: 'Travel Tips for Adventurous Souls',
        description: 'Tips and tricks for adventurous travel.',
      },
      {
        id: '9c21f1a0-c5aa-4c05-9e64-5eaa7b8a7197',
        name: 'Italian Cuisine: Pasta Perfection',
        description: 'Master the art of Italian pasta dishes.',
      },
      {
        id: 'a3c2f143-8a0e-4c9e-8a87-7b84cafd903a',
        name: 'Effective Strategies for Content Creation',
        description:
          'Discover the best practices for creating engaging content.',
      },
      {
        id: 'a8b6cfe0-c6f2-4c8a-849a-8194c0e1c3b6',
        name: 'Financial Planning for a Secure Retirement',
        description: 'Plan for a secure financial future and retirement.',
      },
      {
        id: 'ae5b8c1e-7d98-4e4b-a2d9-fbc7c88511ec',
        name: 'Modern Art: A Journey Through Time',
        description: 'Explore the world of modern art and its evolution.',
      },
      {
        id: 'bd3b1562-6ea4-42c5-90c4-7c8933c3e4a8',
        name: 'Adventure in National Parks',
        description: 'Embark on thrilling adventures in national parks.',
      },
      {
        id: 'd54c29eb-cd62-4e94-bbd1-30eb8b8d9b20',
        name: 'The Art of Storytelling in Marketing',
        description:
          'Learn the secrets of effective storytelling in marketing.',
      },
      {
        id: 'dc3b071a-4d4c-48d1-b8ca-672738c5e57d',
        name: 'Effective Communication Skills in the Digital Age',
        description: 'Enhance your communication skills for the digital era.',
      },
      {
        id: 'e78625a4-2d47-4f65-89ce-90f6cc86ee9c',
        name: 'Sustainable Living for a Greener World',
        description:
          'Learn how to live sustainably and protect the environment.',
      },
      {
        id: 'e7b7c273-02d9-47cb-81f2-3833d63df6c3',
        name: 'Exploring National Geographic Wonders',
        description:
          'Journey through the wonders of the world with National Geographic.',
      },
      {
        id: 'e95f03f0-6e5d-4ad4-8b22-d7ec7d6b2f90',
        name: 'Discovering the Wonders of Astronomy',
        description: 'Explore the mysteries of the universe and astronomy.',
      },
      {
        id: 'ecf78c03-330a-4ae4-9909-4d01a3b98922',
        name: 'Investing in Stock Markets for Beginners',
        description: "A beginner's guide to investing in the stock market.",
      },
      {
        id: 'f4ac2b6e-8e3c-42a7-aed9-593c9e6d8d44',
        name: 'Photography Techniques for Beginners',
        description:
          'Get started with photography using these beginner techniques.',
      },
    ]);
  }
}
