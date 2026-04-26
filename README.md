# Global News Times

Global News Times is a modern and responsive news web application built with Next.js. It provides real-time news updates across multiple categories including world news, sports, technology, and Bangladesh news in a single platform. The goal of this project is to deliver fast, organized, and user-friendly news browsing experience.

## Features

- Real-time latest news updates  
- Multiple categories such as World, Sports, Technology, and Bangladesh news  
- User authentication system with protected routes  
- User dashboard for personalized experience  
- Fully responsive design for mobile, tablet, and desktop  
- Fast performance using Next.js App Router  
- Dynamic routing for detailed news pages  
- Bookmark or save news feature (if implemented)  
- Clean and modern UI using Tailwind CSS  

## Tech Stack

- Next.js for frontend framework  
- React for UI development  
- Tailwind CSS for styling  
- React Icons for icon system  
- Custom authentication system or auth client  
- REST API or mock API for news data  

## Project Structure

app  
components  
dashboard  
latest-news  
world-news  
bangladesh-news  
sports-news  
auth  
lib  
utils  
public  

## Installation and Setup

First, clone the repository:

git clone https://github.com/Chanbadsha/global-news-times.git

Then navigate to the project directory:

cd global-news-times

Install dependencies:

npm install

Run the development server:

npm run dev

Open the project in your browser:

http://localhost:3000

## Environment Variables

Create a .env.local file in the root directory and add the required variables:

NEXT_PUBLIC_API_URL=your_api_url  
NEXT_PUBLIC_AUTH_SECRET=your_auth_secret  

## Routes

/ Home page  
/latest-news Latest news page  
/world-news World news category  
/bangladesh-news Bangladesh news category  
/sports-news Sports news category  
/dashboard User dashboard (protected route)  

## Protected Routes

Some routes like dashboard are protected and require user authentication to access.

## Contribution

You can contribute to this project by following these steps:

Fork the repository  
Create a new branch  
Make your changes  
Commit your changes  
Push to the branch  
Create a pull request  

## License

This project is licensed under the MIT License.

## Author

Developed by Chan Badsha Bhuiyan
