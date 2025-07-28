import { CourseData } from '@/types/course';

// Mock data that matches the expected API structure
export const mockCourseData: CourseData = {
  slug: "ielts-course",
  id: 1,
  title: "IELTS Course by Munzereen Shahid",
  description: `
    <p>Academic IELTS এবং General Training IELTS- এর কার্যকর প্রিপারেশন নিন একটি কোর্সেই! দেশের 
    IELTS Instructor এর সাহায্যে ব্যর্থতার আপনার IELTS Course-এ।</p>
    <p>এই কোর্সে পাবেন সম্পূর্ণ IELTS প্রস্তুতি, যা আপনাকে সফলতার দিকে এগিয়ে নিয়ে যাবে।</p>
  `,
  media: [
    {
      id: 1,
      title: "IELTS Course Introduction",
      type: "video",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      thumbnail: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=450&fit=crop",
      duration: "5:30"
    },
    {
      id: 2,
      title: "Course Overview",
      type: "video",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=450&fit=crop",
      duration: "10:15"
    },
    {
      id: 3,
      title: "Study Materials",
      type: "image",
      url: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=450&fit=crop"
    }
  ],
  checklist: [
    {
      id: 1,
      title: "৫০+ ভিডিও লেকচার",
      description: "সম্পূর্ণ IELTS সিলেবাস কভার করে বিস্তারিত ভিডিও লেকচার"
    },
    {
      id: 2,
      title: "১০টি লাইভ এক্সাম",
      description: "রিয়েল IELTS পরীক্ষার অভিজ্ঞতা পেতে লাইভ এক্সাম"
    },
    {
      id: 3,
      title: "১০টি সিমুলেটর মক টেস্ট",
      description: "আসল পরীক্ষার মতো মক টেস্টের মাধ্যমে প্রস্তুতি"
    },
    {
      id: 4,
      title: "৬০০+ Vocabulary",
      description: "IELTS পরীক্ষার জন্য প্রয়োজনীয় শব্দভান্ডার"
    },
    {
      id: 5,
      title: "সার্টিফিকেট",
      description: "কোর্স সম্পন্ন করার পর ডিজিটাল সার্টিফিকেট"
    },
    {
      id: 6,
      title: "লাইফটাইম এক্সেস",
      description: "একবার কিনলে সব সময়ের জন্য কোর্স এক্সেস"
    }
  ],
  seo: {
    title: "IELTS Course by Munzereen Shahid - 10 Minute School",
    description: "Academic IELTS এবং General Training IELTS- এর কার্যকর প্রিপারেশন নিন একটি কোর্সেই! দেশের IELTS Instructor এর সাহায্যে ব্যর্থতার আপনার IELTS Course-এ।",
    keywords: "IELTS, English, Course, Bangladesh, Online Learning, Munzereen Shahid",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&h=630&fit=crop"
  },
  cta_text: {
    primary: "কোর্স কিনুন",
    secondary: "আরো জানুন"
  },
  sections: [
    {
      id: 1,
      type: "instructor",
      title: "কোর্স ইন্সট্রাক্টর",
      content: {
        title: "Munzereen Shahid",
        description: "IELTS বিশেষজ্ঞ এবং অভিজ্ঞ শিক্ষক"
      },
      instructors: [
        {
          id: 1,
          name: "Munzereen Shahid",
          bio: "MSc (English), University of Oxford (UK); BA, MA (English), University of Dhaka; IELTS: 8.5",
          credentials: "MSc (English), University of Oxford (UK); BA, MA (English), University of Dhaka",
          image: "https://images.unsplash.com/photo-1494790108755-2616b612b412?w=400&h=400&fit=crop&crop=face",
          rating: 8.5
        }
      ]
    },
    {
      id: 2,
      type: "features",
      title: "কোর্সটি যেভাবে সাজানো হয়েছে",
      content: {
        items: [
          "৫০+ ডিটেইল লেকচার",
          "IELTS Academic ও General Training এর প্রেক্টিস এবং ফরমেট ও প্রশ্নের ধরন জানা In-depth আলোচনা",
          "রিডিং এবং লিস্টিং মক টেস্ট",
          "ডাউট সলভিং লাইভ ক্লাস",
          "Reading, Writing, Listening ও Speaking এর প্রতিটি প্রশ্নের ধরন নিয়ে ৬০০+ Vocabulary"
        ]
      }
    },
    {
      id: 3,
      type: "pointers",
      title: "কোর্স করে আপনি যা যা শিখবেন",
      content: {
        items: [
          "IELTS পরীক্ষার সম্পূর্ণ ফরমেট ও কৌশল",
          "Reading এর জন্য effective techniques এবং strategies",
          "Writing Task 1 ও 2 এর জন্য perfect structure এবং vocabulary",
          "Listening এর জন্য note-taking এবং prediction skills",
          "Speaking এর জন্য fluency, pronunciation এবং confidence building",
          "Time management এবং exam techniques",
          "৬০০+ high-frequency vocabulary words",
          "Common mistakes এড়ানোর উপায়"
        ]
      }
    },
    {
      id: 4,
      type: "about",
      title: "কোর্স বিস্তারিত",
      content: {
        html: `
          <p>এই কোর্সটি Academic IELTS এবং General Training IELTS উভয়ের জন্য ডিজাইন করা হয়েছে। 
          কোর্সটি সম্পূর্ণভাবে বাংলায় পরিচালিত হবে যাতে শিক্ষার্থীরা সহজে বুঝতে পারে।</p>
          
          <h3>কোর্সের বিশেষত্ব:</h3>
          <ul>
            <li>৫০+ বিস্তারিত ভিডিও লেকচার</li>
            <li>১০টি লাইভ পরীক্ষা</li>
            <li>১০টি সিমুলেটর মক টেস্ট</li>
            <li>৬০০+ vocabulary with meaning এবং usage</li>
            <li>সব ধরনের question types এর সমাধান</li>
            <li>Personalized feedback এবং improvement suggestions</li>
          </ul>
          
          <h3>কোর্স কমপ্লিট করার পর:</h3>
          <ul>
            <li>IELTS পরীক্ষায় ভাল স্কোর করার confidence পাবেন</li>
            <li>English language skills significantly improve হবে</li>
            <li>ডিজিটাল certificate পাবেন</li>
            <li>Lifetime access এবং future updates</li>
          </ul>
        `,
        description: "সম্পূর্ণ IELTS প্রস্তুতির জন্য এই কোর্সটি আপনার প্রয়োজনীয় সব কিছু রয়েছে।"
      }
    },
    {
      id: 5,
      type: "exclusive",
      title: "কোর্স এক্সক্লুসিভ ফিচার",
      content: {
        items: [
          "ডাউট সলভিং সেশন সাপোর্ট",
          "ফেসবুক গ্রুপে কমিউনিটি সাপোর্ট",
          "১ ফ্রি ক্যারিয়ার ২৪ ঘন্টা",
          "কোর্সের মেয়াদ আজীবন",
          "Regular content updates",
          "Mobile app access"
        ]
      }
    }
  ]
};