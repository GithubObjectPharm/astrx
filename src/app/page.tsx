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
    <div className="bg-white">
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
        <section className="mb-12 bg-white">
          <div className="grid grid-cols-2 gap-4">
            {/* Content Section */}
            <div className="flex flex-col items-start">
              <div className="flex flex-col items-start mt-20 ml-12" style={{maxWidth: '650px', position: 'relative', left: '165px', top: '50px'}}>
                <Image
                  src="https://astrx.eprepstation.com/images/logo.png"
                  alt="Astrx Logo"
                  width={350 * 1.4}
                  height={150 * 1.4}
                  className="mb-4"
                  style={{alignItems: 'left'}}
                />
                <p className="text-left mb-6 text-2xl" style={{maxWidth: '600px'}}>
                  Gain access to a wide range of courses taught by professional instructors covering diverse topics, including AI automation for workflow efficiency and comprehensive pharmacy training. Click "Join Now" to explore the full library and start learning today.
                </p>
                
                 <div className="flex space-x-4">
                    <Button variant="default" size="lg" style={{ fontSize: '1.5rem', padding: '1.5rem 4rem', width: '250px', backgroundColor: 'hsl(var(--astrx-blue))', color: 'white' }}>
                      Join for Free
                    </Button>
                    <Button variant="outline" size="lg" style={{ fontSize: '1.5rem', padding: '1.5rem 4rem', width: '250px', color: 'hsl(var(--astrx-blue))', borderColor: 'hsl(var(--astrx-blue))' }}>
                      Become a Instructor
                    </Button>
                  </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="flex justify-end items-center">
              <Image
                src="https://astrx.eprepstation.com/images/male-doc.png"
                alt="Male Doctor"
                width={500}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </section>

        {/* Course Preview Section */}
        <section className="py-12  bg-muted" style={{marginTop: '150px'}}>
          <div className="container mx-auto">
            <h2 className="text-2xl font-semibold text-center mb-6">
              Course Preview
            </h2>
             <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6 mt-8">
              {/* Example Course Cards - Replace with actual data */}
              <Card>
                <CardHeader>
                  <CardTitle>AI Training</CardTitle>
                  <CardDescription>Learn AI Automation for Everyday tasks.</CardDescription>
                </CardHeader>
                <CardContent style={{height: '250px', position: 'relative', top: '-20px', objectFit: 'contain', height: '100%', width: '100%' }}>
                   <Image
                      src="https://astrx.eprepstation.com/upload/courses/WhatsApp%20Image%202025-02-08%20at%2015.45.27.jpeg"
                      alt="AI Training"
                      width={500}
                      height={300}
                      style={{ objectFit: 'contain', height: '100%', width: '100%' }}
                    />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>KROLL Training</CardTitle>
                  <CardDescription>Master the science of drug action.</CardDescription>
                </CardHeader>
                <CardContent style={{height: '250px', position: 'relative', top: '-20px', objectFit: 'contain', height: '100%', width: '100%' }}>
                    <Image
                      src="https://astrx.eprepstation.com/upload/courses/kroll.png"
                      alt="KROLL Training"
                      width={500}
                      height={300}
                      style={{ objectFit: 'contain', height: '100%', width: '100%' }}
                    />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>USMLE Training</CardTitle>
                  <CardDescription>Apply drugs to treat diseases.</CardDescription>
                </CardHeader>
                <CardContent style={{height: '250px', position: 'relative', top: '-20px', objectFit: 'contain', height: '100%', width: '100%' }}>
                   <Image
                      src="https://astrx.eprepstation.com/upload/courses/USMLE.png"
                      alt="USMLE Training"
                      width={500}
                      height={300}
                      style={{ objectFit: 'contain', height: '100%', width: '100%' }}
                    />
                </CardContent>
              </Card>

               <Card>
                <CardHeader>
                  <CardTitle>FPGEE Training</CardTitle>
                  <CardDescription>Prepare for the FPGEE Examination.</CardDescription>
                </CardHeader>
                <CardContent style={{height: '250px', position: 'relative', top: '-20px', objectFit: 'contain', height: '100%', width: '100%' }}>
                    <Image
                      src="https://astrx.eprepstation.com/upload/courses/fpgee%20selfpaced.jpg"
                      alt="FPGEE Training"
                      width={500}
                      height={300}
                      style={{ objectFit: 'contain', height: '100%', width: '100%' }}
                    />
                </CardContent>
              </Card>
            </div>

               <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6 mt-8" style={{ marginTop: '50px' }}>
              {/* Example Course Cards - Replace with actual data */}
              <Card>
                <CardHeader>
                  <CardTitle>ASTRx Drug Monograph</CardTitle>
                  <CardDescription>Explore essential drug information.</CardDescription>
                </CardHeader>
                <CardContent style={{height: '250px', position: 'relative', top: '-20px', objectFit: 'contain', height: '100%', width: '100%' }}>
                   <Image
                      src="https://astrx.eprepstation.com/upload/courses/astrx-drug-information-resource.jpg"
                      alt="ASTRx Drug Monograph"
                      width={500}
                      height={300}
                      style={{ objectFit: 'contain', height: '100%', width: '100%' }}
                    />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>REx-PN™ Q Bank Course</CardTitle>
                  <CardDescription>Ace your Pharmacy exams.</CardDescription>
                </CardHeader>
                <CardContent style={{height: '250px', position: 'relative', top: '-20px', objectFit: 'contain', height: '100%', width: '100%' }}>
                    <Image
                      src="https://astrx.eprepstation.com/upload/courses/rpnfront.png"
                      alt="REx-PN™ Q Bank Course"
                      width={500}
                      height={300}
                      style={{ objectFit: 'contain', height: '100%', width: '100%' }}
                    />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>MCCQE Prep Course</CardTitle>
                  <CardDescription>Prepare for your medical exams.</CardDescription>
                </CardHeader>
                <CardContent style={{height: '250px', position: 'relative', top: '-20px', objectFit: 'contain', height: '100%', width: '100%' }}>
                   <Image
                      src="https://astrx.eprepstation.com/upload/courses/mccqe.png"
                      alt="MCCQE Prep Course"
                      width={500}
                      height={300}
                      style={{ objectFit: 'contain', height: '100%', width: '100%' }}
                    />
                </CardContent>
              </Card>

               <Card>
                <CardHeader>
                  <CardTitle>PTCB Exam Training</CardTitle>
                  <CardDescription>Ace your Pharmacy Technician Exams</CardDescription>
                </CardHeader>
                <CardContent style={{height: '250px', position: 'relative', top: '-20px', objectFit: 'contain', height: '100%', width: '100%' }}>
                    <Image
                      src="https://astrx.eprepstation.com/upload/courses/ptcb.jpg"
                      alt="PTCB Exam Training"
                      width={500}
                      height={300}
                      style={{ objectFit: 'contain', height: '100%', width: '100%' }}
                    />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonial Carousel */}
        <section className="py-12 testimonials bg-white" style={{ marginTop: '150px' }}>
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
        <section className="py-12 bg-white">
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
                width={180}
                height={72}
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
    </div>
  );
}
