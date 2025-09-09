### 6. Create a README file to answer the following question:

1. What is the difference between **var, let, and const**? <br>
Answer: 
- **var**: Function-স্কোপ (বা global), কোনো block এর ভিতরে থাকলেও বাইরে অ্যাক্সেস করা যায়, redeclare করতে পারা যায়।
- **let**: Block-স্কোপ, same নাম redeclare করা যায় না, তবে মান পরিবর্তন করা যায়।
- **const**: Block-স্কোপ, redeclare বা reassign করা যায় না—তবে object বা array এর ভেতরের data পরিবর্তন করা যায়।

2. What is the difference between **map(), forEach(), and filter()**? <br>
Answer:
- **forEach()**: প্রতিটি item-এর জন্য callback চলে কিন্তু কিছু return করে না (return undefined)—side effects এর জন্য ভালো।
- **map()**: প্রতিটি item transform করে একটা নতুন array return করে।
- **filter()**: condition অনুযায়ী items ফিল্টার করে একটি নতুন array return করে।

3. What are arrow functions in **ES6**? <br>
Answer:
- **ES6**-এ নতুনভাবে পরিচিত একটি ফাংশন লেখার পদ্ধতি যা => দিয়ে চিহ্নিত হয়। এটি সাধারণ ফাংশনের তুলনায় আরও সংক্ষিপ্ত ও পরিষ্কার। 
- উদাহরণ: const add = (a, b) => a + b;
4. How does **destructuring assignment** work in **ES6**? <br>
Answer:
- **ES6**-এ **Destructuring Assignment** হলো একটি নতুন সিনট্যাক্স যা দিয়ে অ্যারে বা অবজেক্টের মানগুলোকে সরাসরি ভেরিয়েবলে অ্যাসাইন করা যায়। এটি কোডকে আরও সংক্ষিপ্ত, পরিষ্কার এবং পড়তে সহজ করে তোলে।

5. Explain **template literals** in **ES6**. How are they different from **string concatenation**? <br>
Answer:
- **Template Literals** হলো স্ট্রিং ডিফাইন করার একটি নতুন সিনট্যাক্স, যা ব্যাকটিক (`) চিহ্ন দিয়ে ঘেরা থাকে। এতে ${} দিয়ে এক্সপ্রেশন বা ভেরিয়েবল ইনসার্ট করা যায়।
- **String Concatenation** হলো দুটি বা তার বেশি স্ট্রিংকে একত্রিত করে একটি নতুন স্ট্রিং তৈরি করার প্রক্রিয়া। এটি সাধারণত ডাইনামিক টেক্সট তৈরি, ব্যবহারকারীর ইনপুট প্রসেসিং, অথবা ইউজার ইন্টারফেসে মেসেজ প্রদর্শনের জন্য ব্যবহৃত হয়।

##
- [🌐 **Live Link**](https://fardin-sojon.github.io/assignment6-green-earth/)


# Let's Code and Achieve your Dream 🎯