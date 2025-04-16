import Image from 'next/image';
import Link from 'next/link';
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from '@/components/ui/accordion';
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from '@/components/ui/card';
import {Input} from '@/components/ui/input';
import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar';
import {Mail, Facebook, Instagram, Twitter, Youtube} from 'lucide-react';

const testimonials = [
  {
    review: 'Astrx helped me pass my board exam with flying colors!',
    user: 'Sarah L.',
  },
  {
    review: 'The all-in-one platform is a lifesaver. Highly recommend!',
    user: 'John D.',
  },
  {
    review: 'I was able to study all topics at once, this is amazing',
    user: 'Emily R.',
  },
];

const instructors = [
  {
    name: 'Dr. Smith',
    bio: 'Expert in Pharmacology with over 10 years of experience.',
    avatarUrl: 'https://picsum.photos/id/1/100/100',
  },
  {
    name: 'Professor Johnson',
    bio: 'Passionate about Pathophysiology and board exam success.',
    avatarUrl: 'https://picsum.photos/id/2/100/100',
  },
  {
    name: 'Dr. Anderson',
    bio: 'Expert in Pharmacotherapy with over 15 years of experience.',
    avatarUrl: 'https://picsum.photos/id/6/100/100',
  },
];

const faqData = [
  {
    question: 'What is Astrx?',
    answer: 'Astrx is an all-in-one online platform empowering nurses, physicians, pharmacists, pharmacy technicians, and dentists to succeed in their licensing exams.',
  },
  {
    question: 'What subjects do you cover?',
    answer: 'We cover Pathophysiology, Pharmacology, and Pharmacotherapy.',
  },
  {
    question: 'How can Astrx help me?',
    answer: 'Astrx provides comprehensive resources and tools to help you succeed in your licensing exams.',
  },
  {
    question: 'What kind of resources are available?',
    answer: 'We offer video lessons, practice questions, study guides, and more.',
  },
  {
    question: 'How do I access courses?',
    answer: 'Click the "Access Courses" button to view our available courses.',
  },
];

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Title and Menu */}
      <header className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-primary" style={{marginLeft: '20px', marginRight: '20px'}}>Astrx</h1>
        <nav className="space-x-6">
          <Link href="#" className="hover:text-accent">
            Home
          </Link>
          <Link href="#" className="hover:text-accent">
            Courses
          </Link>
          <Link href="#" className="hover:text-accent">
            Pricing
          </Link>
          <Link href="#" className="hover:text-accent">
            Blog
          </Link>
          <Link href="#" className="hover:text-accent">
            Contact
          </Link>
        </nav>
      </header>

      {/* About Astrx */}
      <section className="mb-12">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col items-start">
            <Image
              src="https://astrx.eprepstation.com/images/logo.png"
              alt="Astrx Logo"
              width={200}
              height={80}
              className="mb-4"
            />
            <p className="text-left mb-6">
              All-in-One Platform Empowering Nurses, Physicians, Pharmacists, Pharmacy Technicians, and Dentists and all Other Health Professionals to Succeed in their Licensing Exams
            </p>
            <Button variant="default">
              <Link href="#">Access Courses</Link>
            </Button>
          </div>

          {/* Male Doctor Image */}
          <div className="flex justify-end">
            <Image
              src="https://astrx.eprepstation.com/images/male-doc.png"
              alt="Male Doctor"
              width={400}
              height={300}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Video Placeholder */}
        <div className="flex justify-center mt-8">
          <Image
            src="https://astrx.eprepstation.com/images/video-placeholder.jpg"
            alt="Video Placeholder"
            width={800}
            height={450}
            className="rounded-lg shadow-md"
          />
        </div>
      </section>

      {/* Testimonial Carousel */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-6">
            What Our Learners Say
          </h2>
          <div className="flex overflow-x-auto snap-x gap-4 p-4">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="snap-start w-full md:w-1/2 lg:w-1/3 px-4"
              >
                <Card>
                  <CardContent>
                    <p className="text-center">{testimonial.review}</p>
                    <p className="text-center mt-4">- {testimonial.user}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-primary text-primary-foreground text-center">
        <h2 className="text-3xl font-bold mb-4">
          Join thousands of learners on Astrx
        </h2>
        <Button variant="default">Get Started</Button>
      </section>

      {/* Featured Instructors */}
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-8">
            Featured Instructors
          </h2>
          <div className="flex overflow-x-auto snap-x gap-4 p-4">
            {instructors.map((instructor, index) => (
              <div
                key={index}
                className="snap-start w-full md:w-1/2 lg:w-1/3 px-4"
              >
                <Card>
                  <CardHeader>
                    <CardTitle>{instructor.name}</CardTitle>
                    <CardDescription>{instructor.bio}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Avatar className="mb-4">
                      <AvatarImage src={instructor.avatarUrl} alt={instructor.name} />
                      <AvatarFallback>{instructor.name.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-8">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible>
            {faqData.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-pale-beige py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div>
            <Image
              src="https://astrx.eprepstation.com/images/logo.png"
              alt="Astrx Logo"
              width={120}
              height={48}
              className="mb-4"
            />
            <p className="text-sm">
              Your All-in-One Platform to Succeed in Licensing Exams.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-accent">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Icons */}
          <div>
            <h3 className="font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-accent">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:text-accent">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:text-accent">
                <Instagram className="h-6 w-6" />
              </Link>
               <Link href="#" className="hover:text-accent">
                <Youtube className="h-6 w-6" />
              </Link>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="font-semibold mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-sm mb-4">
              Stay updated with our latest courses and resources.
            </p>
            <div className="flex">
              <Input
                type="email"
                placeholder="Enter your email"
                className="mr-2"
              />
              <Button variant="default">Subscribe</Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
