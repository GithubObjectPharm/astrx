import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mail, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const testimonials = [
  {
    review: "Astrx courses helped me learn critical skills within a few days!",
    user: "Sarah",
  },
  {
    review: "The all-in-one platform is a lifesaver. Highly recommend!",
    user: "Chris",
  },
  {
    review: "I was able to study all topics at once, this is amazing",
    user: "Emily",
  },
  {
    review:
      "This platform helped me pass my boards and now i am fully licensed",
    user: "Brandon",
  },
];

const instructors = [
  {
    name: "Ausaaf Ansari",
    avatarUrl: "https://img-c.udemycdn.com/user/200_H/281417217_f02c.jpg",
  },
  {
    name: "Dr. Ifte Ali, MD",
    avatarUrl: "https://picsum.photos/id/2/100/100",
  },
  {
    name: "Shagufta Kanwal",
    avatarUrl:
      "https://tse4.mm.bing.net/th/id/OIP.baaFk55FnbWGGUYGxd681AHaE4?rs=1&pid=ImgDetMain",
  },
  {
    name: "Susan Matthews",
    avatarUrl:
      "https://tse4.mm.bing.net/th/id/OIP.Sa2EgEFvyNPYHeN1q1_NtgAAAA?w=474&h=316&rs=1&pid=ImgDetMain",
  },
  {
    name: "Pharmacy Prep",
    avatarUrl:
      "https://yt3.googleusercontent.com/bjr4StpuwSta-TvXR535k25WzEHgaPQAdk60ppkafpSj6PRiNiDjrXA27Zcz2uuEq-9eXp8ZAg=s160-c-k-c0x00ffffff-no-rj",
  },
];

const faqData = [
  {
    question: "What is Astrx?",
    answer:
      "Astrx is an all-in-one online platform empowering nurses, physicians, pharmacists, pharmacy technicians, and dentists to succeed in their licensing exams.",
  },
  {
    question: "What subjects do you cover?",
    answer: "We cover Pathophysiology, Pharmacology, and Pharmacotherapy.",
  },
  {
    question: "How can Astrx help me?",
    answer:
      "Astrx provides comprehensive resources and tools to help you succeed in your licensing exams.",
  },
  {
    question: "What kind of resources are available?",
    answer:
      "We offer video lessons, practice questions, study guides, and more.",
  },
  {
    question: "How do I access courses?",
    answer: 'Click the "Access Courses" button to view our available courses.',
  },
];

export default function Home() {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4">
        {/* Title and Menu */}
        <header className="flex items-center justify-center md:justify-between mb-8">
          <Image
            src="https://astrx.eprepstation.com/upload/courses/lozgo%20(3).png"
            alt="Astrx Logo"
            width={208}
            height={82}
            style={{ marginLeft: "0px", marginRight: "0px", marginTop: "30px" }}
            priority
          />
          <nav className="space-x-6 hidden md:flex">
            <Link
              href="https://astrx.eprepstation.com/index.php"
              className="hover:text-accent"
              target="_blank"
              rel="noopener noreferrer"
            >
              Home
            </Link>
            <Link
              href="https://astrx.eprepstation.com/courses_list"
              className="hover:text-accent"
              target="_blank"
              rel="noopener noreferrer"
            >
              Courses
            </Link>
            <Link
              href="https://astrx.eprepstation.com/books"
              className="hover:text-accent"
              target="_blank"
              rel="noopener noreferrer"
            >
              Books
            </Link>
            <button className="hover:text-accent" type="button">
              FAQ
            </button>
            <Link
              href="https://www.youtube.com/@AstrxAI"
              className="hover:text-accent"
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube
            </Link>
          </nav>
        </header>

        {/* About Astrx */}
        <section className="mb-12 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Content Section */}
            <div className="flex flex-col items-center md:items-end px-4">
              <div
                className="flex flex-col items-center md:items-start mt-8 md:mt-20"
                style={{ maxWidth: "650px", width: "100%" }}
              >
                <div
                  className="italic font-bold mb-4"
                  style={{ fontSize: "4.5rem", textAlign: "left" }}
                >
                  Astrx
                </div>
                <p
                  className="text-center md:text-left mb-6 text-2xl"
                  style={{ maxWidth: "700px", color: "grey" }}
                >
                  Gain access to a wide range of courses taught by professional
                  instructors covering diverse topics, including AI automation
                  for workflow efficiency and comprehensive pharmacy training.
                  Click "Enroll" to be redirected and explore the full library
                  to start learning today.
                </p>
                <div className="flex flex-col md:flex-row gap-4">
                  <Link
                    href="https://astrx.eprepstation.com/courses_list"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="default"
                      size="lg"
                      className="w-full md:w-[300px] h-[75px] text-[1.4rem] px-8"
                      style={{
                        padding: "1.5rem 4rem",
                        backgroundColor: "#4287f5",
                        color: "white",
                      }}
                    >
                      Enroll in Courses
                    </Button>
                  </Link>
                  <Link
                    href="https://astrx.eprepstation.com/page/teach-on-astrx"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full md:w-[300px] h-[75px] text-[1.4rem] px-8 border hover:bg-astrx-blue hover:text-white"
                      style={{
                        padding: "1.5rem 4rem",
                        color: "#4287f5",
                        borderColor: "#4287f5",
                      }}
                    >
                      Become a Instructor
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="flex justify-center items-center px-4 mt-8 md:mt-0 hidden md:flex">
              <Image
                src="https://astrx.eprepstation.com/upload/courses/astrximage402.png"
                alt="Male Doctor"
                width={575}
                height={475}
                className="rounded-lg shadow-md w-full max-w-xs md:max-w-lg"
                style={{ color: "transparent" }}
              />
            </div>
          </div>
        </section>

        {/* Course Preview Section */}
        <section className="py-12 bg-muted">
          <div className="container mx-auto">
            <h2 className="text-2xl font-semibold text-center mb-6">
              Course Previews
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6 mt-8">
              {/* AI Training */}
              <Card className="rounded-lg border bg-card text-card-foreground shadow-sm max-w-xs w-full mx-auto">
                <CardHeader className="flex flex-col space-y-1.5 p-6">
                  <Link
                    href="https://astrx.eprepstation.com/course_detail/47"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <CardTitle
                      className="text-2xl font-semibold leading-none tracking-tight"
                      style={{ fontSize: "1.5rem" }}
                    >
                      AI Training
                    </CardTitle>
                  </Link>
                </CardHeader>
                <CardContent className="p-6 pt-0" style={{ height: "400px" }}>
                  <Link
                    href="https://astrx.eprepstation.com/course_detail/47"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="https://astrx.eprepstation.com/upload/courses/WhatsApp%20Image%202025-02-08%20at%2015.45.27.jpeg"
                      alt="AI Training"
                      width={500}
                      height={300}
                      className="w-full h-auto object-contain"
                      style={{
                        objectFit: "contain",
                        height: "80%",
                        width: "100%",
                        position: "relative",
                        top: "-10px",
                        color: "transparent",
                      }}
                    />
                  </Link>
                  <p className="text-muted-foreground mt-2">
                    About: Master AI Automation for Workflow Optimization.
                  </p>
                  <p className="text-muted-foreground font-bold">
                    By: Ausaaf Ansari
                  </p>
                </CardContent>
              </Card>

              {/* KROLL Training */}
              <Card className="rounded-lg border bg-card text-card-foreground shadow-sm max-w-xs w-full mx-auto">
                <CardHeader className="flex flex-col space-y-1.5 p-6">
                  <Link
                    href="https://astrx.eprepstation.com/course_detail/40"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <CardTitle
                      className="text-2xl font-semibold leading-none tracking-tight"
                      style={{ fontSize: "1.5rem" }}
                    >
                      KROLL Training
                    </CardTitle>
                  </Link>
                </CardHeader>
                <CardContent className="p-6 pt-0" style={{ height: "400px" }}>
                  <Link
                    href="https://astrx.eprepstation.com/course_detail/40"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="https://astrx.eprepstation.com/upload/courses/kroll.png"
                      alt="KROLL Training"
                      width={500}
                      height={300}
                      className="w-full h-auto object-contain"
                      style={{
                        objectFit: "contain",
                        height: "80%",
                        width: "100%",
                        position: "relative",
                        top: "-10px",
                        color: "transparent",
                      }}
                    />
                  </Link>
                  <p className="text-muted-foreground mt-2">
                    About: Learn and master the KROLL Software with this Course.
                  </p>
                  <p className="text-muted-foreground font-bold">
                    By: Shagufta Kanwal
                  </p>
                </CardContent>
              </Card>

              {/* USMLE Training */}
              <Card className="rounded-lg border bg-card text-card-foreground shadow-sm max-w-xs w-full mx-auto">
                <CardHeader className="flex flex-col space-y-1.5 p-6">
                  <Link
                    href="https://astrx.eprepstation.com/course_detail/44"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <CardTitle
                      className="text-2xl font-semibold leading-none tracking-tight"
                      style={{ fontSize: "1.5rem" }}
                    >
                      USMLE Training
                    </CardTitle>
                  </Link>
                </CardHeader>
                <CardContent className="p-6 pt-0" style={{ height: "400px" }}>
                  <Link
                    href="https://astrx.eprepstation.com/course_detail/44"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="https://astrx.eprepstation.com/upload/courses/USMLE.png"
                      alt="USMLE Training"
                      width={500}
                      height={300}
                      className="w-full h-auto object-contain"
                      style={{
                        objectFit: "contain",
                        height: "80%",
                        width: "100%",
                        position: "relative",
                        top: "-10px",
                        color: "transparent",
                      }}
                    />
                  </Link>
                  <p className="text-muted-foreground mt-2">
                    About: USMLE Exam Standard Prep Course Part 1.
                  </p>
                  <p className="text-muted-foreground font-bold">
                    By: Dr. Ifte Ali, MD
                  </p>
                </CardContent>
              </Card>

              {/* FPGEE Training */}
              <Card className="rounded-lg border bg-card text-card-foreground shadow-sm max-w-xs w-full mx-auto">
                <CardHeader className="flex flex-col space-y-1.5 p-6">
                  <Link
                    href="https://astrx.eprepstation.com/course_detail/46"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <CardTitle
                      className="text-2xl font-semibold leading-none tracking-tight"
                      style={{ fontSize: "1.5rem" }}
                    >
                      FPGEE Training
                    </CardTitle>
                  </Link>
                </CardHeader>
                <CardContent className="p-6 pt-0" style={{ height: "400px" }}>
                  <Link
                    href="https://astrx.eprepstation.com/course_detail/46"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="https://astrx.eprepstation.com/upload/courses/fpgee20selfpaced.jpg"
                      alt="FPGEE Training"
                      width={500}
                      height={300}
                      className="w-full h-auto object-contain"
                      style={{
                        objectFit: "contain",
                        height: "80%",
                        width: "100%",
                        position: "relative",
                        top: "-10px",
                        color: "transparent",
                      }}
                    />
                  </Link>
                  <p className="text-muted-foreground mt-2">
                    About: Prepare for the FPGEE Examination.
                  </p>
                  <p className="text-muted-foreground font-bold">
                    By: Dr. Misbah Biabani
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Second row of cards */}
            <div
              className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6 mt-8"
              style={{ marginTop: "50px" }}
            >
              {/* ASTRx Drug Monograph */}
              <Card className="rounded-lg border bg-card text-card-foreground shadow-sm max-w-xs w-full mx-auto">
                <CardHeader className="flex flex-col space-y-1.5 p-6">
                  <Link
                    href="https://astrx.eprepstation.com/course_detail/37"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <CardTitle
                      className="text-2xl font-semibold leading-none tracking-tight"
                      style={{ fontSize: "1.5rem" }}
                    >
                      ASTRx Drug Monograph
                    </CardTitle>
                  </Link>
                </CardHeader>
                <CardContent className="p-6 pt-0" style={{ height: "400px" }}>
                  <Link
                    href="https://astrx.eprepstation.com/course_detail/37"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="https://astrx.eprepstation.com/upload/courses/astrx-drug-information-resource.jpg"
                      alt="ASTRx Drug Monograph"
                      width={500}
                      height={300}
                      className="w-full h-auto object-contain"
                      style={{
                        objectFit: "contain",
                        height: "80%",
                        width: "100%",
                        position: "relative",
                        top: "-10px",
                        color: "transparent",
                      }}
                    />
                  </Link>
                  <p className="text-muted-foreground mt-2">
                    About: ASTRx Drug Monograph, Pharmacotherapy and Minor
                    Ailments.
                  </p>
                  <p className="text-muted-foreground font-bold">
                    By: Pharmacy Prep
                  </p>
                </CardContent>
              </Card>

              {/* REx-PN™ Q Bank Course */}
              <Card className="rounded-lg border bg-card text-card-foreground shadow-sm max-w-xs w-full mx-auto">
                <CardHeader className="flex flex-col space-y-1.5 p-6">
                  <Link
                    href="https://astrx.eprepstation.com/course_detail/42"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <CardTitle
                      className="text-2xl font-semibold leading-none tracking-tight"
                      style={{ fontSize: "1.5rem" }}
                    >
                      REx-PN™ Q Bank Course
                    </CardTitle>
                  </Link>
                </CardHeader>
                <CardContent className="p-6 pt-0" style={{ height: "400px" }}>
                  <Link
                    href="https://astrx.eprepstation.com/course_detail/42"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="https://astrx.eprepstation.com/upload/courses/rpnfront.png"
                      alt="REx-PN™ Q Bank Course"
                      width={500}
                      height={300}
                      className="w-full h-auto object-contain"
                      style={{
                        objectFit: "contain",
                        height: "80%",
                        width: "100%",
                        position: "relative",
                        top: "-10px",
                        color: "transparent",
                      }}
                    />
                  </Link>
                  <p className="text-muted-foreground mt-2">
                    About: REx-PN™ Q Bank Course: Practice, Mock Exams, Live
                    Support.
                  </p>
                  <p className="text-muted-foreground font-bold">
                    By: Susan Matthews
                  </p>
                </CardContent>
              </Card>

              {/* MCCQE Prep Course */}
              <Card className="rounded-lg border bg-card text-card-foreground shadow-sm max-w-xs w-full mx-auto">
                <CardHeader className="flex flex-col space-y-1.5 p-6">
                  <Link
                    href="https://astrx.eprepstation.com/course_detail/43"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <CardTitle
                      className="text-2xl font-semibold leading-none tracking-tight"
                      style={{ fontSize: "1.5rem" }}
                    >
                      MCCQE Prep Course
                    </CardTitle>
                  </Link>
                </CardHeader>
                <CardContent className="p-6 pt-0" style={{ height: "400px" }}>
                  <Link
                    href="https://astrx.eprepstation.com/course_detail/43"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="https://astrx.eprepstation.com/upload/courses/mccqe.png"
                      alt="MCCQE Prep Course"
                      width={500}
                      height={300}
                      className="w-full h-auto object-contain"
                      style={{
                        objectFit: "contain",
                        height: "80%",
                        width: "100%",
                        position: "relative",
                        top: "-10px",
                        color: "transparent",
                      }}
                    />
                  </Link>
                  <p className="text-muted-foreground mt-2">
                    About: MCCQE Study Course: Flexible, Expert-Led, High-Yield
                    Prep.
                  </p>
                  <p className="text-muted-foreground font-bold">
                    By: Dr. Ifte Ali
                  </p>
                </CardContent>
              </Card>

              {/* PTCB Exam Training */}
              <Card className="rounded-lg border bg-card text-card-foreground shadow-sm max-w-xs w-full mx-auto">
                <CardHeader className="flex flex-col space-y-1.5 p-6">
                  <Link
                    href="https://astrx.eprepstation.com/course_detail/45"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <CardTitle
                      className="text-2xl font-semibold leading-none tracking-tight"
                      style={{ fontSize: "1.5rem" }}
                    >
                      PTCB Exam Training
                    </CardTitle>
                  </Link>
                </CardHeader>
                <CardContent className="p-6 pt-0" style={{ height: "400px" }}>
                  <Link
                    href="https://astrx.eprepstation.com/course_detail/45"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="https://astrx.eprepstation.com/upload/courses/ptcb.jpg"
                      alt="PTCB Exam Training"
                      width={500}
                      height={300}
                      className="w-full h-auto object-contain"
                      style={{
                        objectFit: "contain",
                        height: "80%",
                        width: "100%",
                        position: "relative",
                        top: "-10px",
                        color: "transparent",
                      }}
                    />
                  </Link>
                  <p className="text-muted-foreground mt-2">
                    About: PTCB, PTEC Certification exam Prep Course.
                  </p>
                  <p className="text-muted-foreground font-bold">
                    By: Pharmacy Prep
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonial Carousel */}
        <section className="py-12 testimonials bg-white">
          <div className="container mx-auto">
            <h2 className="text-2xl font-semibold text-center mb-6">
              What Our Learners Say
            </h2>
            <div className="flex flex-col md:flex-row gap-4">
              {testimonials.map((testimonial, idx) => (
                <div
                  key={idx}
                  className="w-full md:w-1/4 p-4"
                  style={{ height: 190, position: "relative", top: 12 }}
                >
                  <Card className="bg-card text-card-foreground shadow-sm rounded-lg border border-[#4287f5] h-full pt-[15px] border-t">
                    <div
                      style={{
                        position: "absolute",
                        top: 23,
                        left: "50%",
                        transform: "translateX(-50%)",
                      }}
                    >
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span
                          key={i}
                          style={{
                            color: "#4287f5",
                            fontSize: "1.2rem",
                            marginTop: "10px",
                          }}
                        >
                          ⭐
                        </span>
                      ))}
                    </div>
                    <CardContent
                      className="flex flex-col justify-between h-[90%] pt-5"
                      style={{ paddingTop: 20 }}
                    >
                      <p
                        className="text-center text-lg"
                        style={{ color: "#4287f5", marginTop: 10 }}
                      >
                        {testimonial.review}
                      </p>
                      <p
                        className="text-center mt-1 text-lg font-bold"
                        style={{ color: "#4287f5", marginTop: 10 }}
                      >
                        - {testimonial.user}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section
          className="relative py-12 md:py-16 text-primary-foreground text-center"
          style={{
            backgroundImage:
              "url('https://tse4.mm.bing.net/th/id/OIP.88AkEXXGJ2iRUP0wPPOHvAHaEJ?w=626&h=351&rs=1&pid=ImgDetMain')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "#4287f5", opacity: 0.8 }}
          ></div>
          <div className="relative z-10 flex flex-col items-center justify-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Join thousands of learners
              <br className="block md:hidden" />
              on Astrx
            </h2>
            <Link
              href="https://astrx.eprepstation.com/index.php"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10"
            >
              <Button
                variant="outline"
                size="lg"
                className="w-full max-w-xs md:max-w-none md:w-auto"
                style={{
                  backgroundColor: "white",
                  color: "#4287f5",
                  borderColor: "#4287f5",
                }}
              >
                Get Started
              </Button>
            </Link>
          </div>
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
                  className="snap-start w-full md:w-1/2 lg:w-1/5 px-4 flex-shrink-0"
                >
                  <Card className="rounded-lg border bg-card text-card-foreground shadow-sm w-full">
                    <CardHeader className="flex flex-col space-y-1.5 p-6">
                      <CardTitle className="text-2xl font-semibold leading-none tracking-tight">
                        {instructor.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 pt-0 flex flex-col items-center">
                      <Avatar className="mb-4 h-10 w-10">
                        <AvatarImage
                          src={instructor.avatarUrl}
                          alt={instructor.name}
                          className="aspect-square h-full w-full"
                        />
                        <AvatarFallback>
                          {instructor.name.substring(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 bg-white" id="faq-section">
          <div className="container mx-auto px-2 sm:px-4">
            <h2
              className="text-2xl font-semibold text-center mb-8"
              style={{ fontSize: "2.43rem" }}
            >
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {faqData.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger
                    className="font-bold"
                    style={{
                      fontSize: "1.2rem",
                      color: "black",
                    }}
                  >
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent
                    className="overflow-hidden text-sm transition-all"
                    style={{
                      color: "grey",
                      fontSize: "1rem",
                      maxWidth: "100%",
                      lineHeight: 1.6,
                    }}
                  >
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-pale-beige py-12">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
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
              <h3 className="font-semibold mb-4">
                Subscribe to Our Newsletter
              </h3>
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
