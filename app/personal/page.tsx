import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  Youtube,
  Heart,
  Code,
  Sparkles,
  ExternalLink,
  GraduationCap,
  Gamepad2,
  Twitter,
  Facebook,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Sameek Kundu - Personal",
  description:
    "Sameek Kundu - Software engineer, game developer, Unreal Engine expert, and Unreal Authorized Instructor Partner. Founder of Athian Games.",
};

const socialLinks = [
  {
    label: "YouTube",
    url: "https://www.youtube.com/channel/UC2meclFXB1GjiFB--vXLRBA",
    icon: Youtube,
  },
  {
    label: "Patreon",
    url: "https://www.patreon.com/c/SameekKundu",
    icon: Heart,
  },
  {
    label: "Twitter",
    url: "https://x.com/Sameek_Kundu",
    icon: Twitter,
  },
  {
    label: "Facebook",
    url: "https://www.facebook.com/sameek.kundu",
    icon: Facebook,
  },
];

const featuredWork = [
  {
    id: "1",
    title: "Art of Shader - Mega Pack",
    description: "Complete shader collection with 200+ materials and VFX",
    category: "Shaders & VFX",
  },
  {
    id: "2",
    title: "Minimap, Map & Navigation System",
    description: "Full-featured navigation solution for games",
    category: "Gameplay Plugin",
  },
  {
    id: "3",
    title: "Niagara Curves and Surfaces",
    description: "Procedural VFX with customizable geometries",
    category: "VFX System",
  },
];

export default function PersonalPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="container-custom mb-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Avatar */}
          <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden relative bg-muted">
            <Image
              src="/images/directorpic.jpg"
              alt="Sameek Kundu"
              fill
              className="object-cover"
            />
          </div>

          <h1 className="mb-4">Sameek Kundu</h1>

          <p className="text-xl text-muted-foreground mb-4">
            Software Engineer • Game Developer • Unreal Authorized Instructor Partner
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <Badge variant="primary">
              <Code className="w-3 h-3 mr-1" />
              C++ & Blueprints
            </Badge>
            <Badge variant="primary">
              <Sparkles className="w-3 h-3 mr-1" />
              Procedural Systems
            </Badge>
            <Badge variant="primary">
              <Gamepad2 className="w-3 h-3 mr-1" />
              Plugin Development
            </Badge>
            <Badge variant="primary">
              <GraduationCap className="w-3 h-3 mr-1" />
              Instructor Partner
            </Badge>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Founder of Athian Games. Building professional Unreal Engine tools,
            plugins, and templates while sharing technical knowledge with the
            game development community.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://www.youtube.com/channel/UC2meclFXB1GjiFB--vXLRBA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg">
                <Youtube className="w-5 h-5 mr-2" />
                Watch on YouTube
              </Button>
            </Link>
            <Link
              href="https://www.patreon.com/c/SameekKundu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="secondary" size="lg">
                <Heart className="w-5 h-5 mr-2" />
                Support on Patreon
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-12 bg-card border-y border-border">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <Link
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                >
                  <Icon className="w-5 h-5 text-primary" />
                  <span className="font-medium">{social.label}</span>
                </Link>
              );
            })}
            <Link
              href="https://www.fab.com/sellers/Athian%20Games"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
            >
              <ExternalLink className="w-5 h-5 text-primary" />
              <span className="font-medium">FAB Marketplace</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="container-custom py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4">Featured Work</h2>
            <p className="text-lg text-muted-foreground">
              Selected projects and tools built for the Unreal Engine community
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredWork.map((work) => (
              <Card key={work.id}>
                <CardContent className="p-6">
                  <Badge variant="primary" className="mb-3">
                    {work.category}
                  </Badge>
                  <h3 className="text-lg font-bold mb-2">{work.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {work.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/products">
              <Button variant="secondary">
                View All Products
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About / Bio */}
      <section className="container-custom py-16 bg-card">
        <div className="max-w-3xl mx-auto">
          <h2 className="mb-6">About</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Sameek Kundu is a software engineer and game developer by both profession and passion, 
              with proven skills and strong analytical abilities in coding across various languages. 
              He has been working with Unreal Engine since its release and possesses a deep understanding 
              of the platform and its capabilities.
            </p>
            <p>
              Having been actively involved in the industry since Unreal Engine 4 was released in March 2014, 
              Sameek has gained extensive expertise in developing plugins and templates for the Unreal Marketplace. 
              His strong track record of delivering high-quality, cutting-edge projects has earned him the 
              distinction of being an Unreal Authorized Instructor Partner, enabling him to share his knowledge 
              and expertise with others in the industry.
            </p>
            <p>
              Sameek is passionate about using technology to create immersive and engaging experiences for players, 
              and he has dedicated his career to developing gameplay systems and tools that push the boundaries 
              of what is possible. His expertise and leadership have been instrumental in the success of 
              Athian Games, helping the company become one of the leading players in game development tools.
            </p>
            <p>
              In addition to his technical skills, Sameek is also a strong communicator and problem-solver. 
              He excels at working with clients and team members to understand their needs and goals, 
              and is adept at finding creative solutions to complex challenges. Whether leading workshops 
              or providing one-on-one coaching, he is dedicated to helping others learn and grow in the 
              field of game development.
            </p>
          </div>
        </div>
      </section>

      {/* Support CTA */}
      <section className="container-custom py-16">
        <Card className="bg-gradient-to-br from-primary/10 to-accent/5 border-primary/20 max-w-4xl mx-auto">
          <CardContent className="p-8 md:p-12 text-center">
            <Heart className="w-16 h-16 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Support the Work</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Patreon supporters get early access to tools, exclusive
              tutorials, direct Discord access, and priority support. Help
              fund independent development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://www.patreon.com/c/SameekKundu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg">
                  <Heart className="w-5 h-5 mr-2" />
                  Become a Supporter
                </Button>
              </Link>
              <Link
                href="https://www.youtube.com/channel/UC2meclFXB1GjiFB--vXLRBA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="secondary" size="lg">
                  <Youtube className="w-5 h-5 mr-2" />
                  Watch Tutorials
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
