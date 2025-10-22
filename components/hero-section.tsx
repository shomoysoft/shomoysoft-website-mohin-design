import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { teamMembers } from "@/data/teamMembers";

export function HeroSection({ visibleCount = 3 }) {
  const visibleMembers = teamMembers.slice(0, visibleCount);
  const extraCount = teamMembers.length - visibleCount;

  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-[10%] w-3 h-3 rotate-45 bg-primary/20" />
      <div className="absolute top-40 right-[15%] w-3 h-3 rotate-45 bg-primary/20" />
      <div className="absolute bottom-32 left-[20%] w-3 h-3 rotate-45 bg-primary/20" />

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-sm font-medium text-muted-foreground">
                Welcome to ShomoySoft
              </p>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-balance">
                Your Brand&apos;s Challenge. Our Smartest{" "}
                <span className="text-primary">Solutions.</span>
              </h1>
              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-xl">
                We specialize in cutting-edge AI development and custom software solutions that transform businesses and drive innovation forward.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Button size="lg" className="font-medium">
                Get Started
              </Button>
              <Button size="lg" variant="ghost" className="font-medium gap-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Play className="w-4 h-4 text-primary fill-primary" />
                </div>
                Watch Video
              </Button>
            </div>
          </div>

          {/* Right content - Team image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/professional-team-collaborating-at-modern-office-d.jpg"
                alt="Professional team collaboration"
                className="w-full h-auto"
              />

              {/* Experience badge */}
              <div className="absolute top-6 right-6 bg-background rounded-xl shadow-lg p-4 text-center min-w-[120px]">
                <div className="text-3xl font-bold text-primary">10+</div>
                <div className="text-xs text-muted-foreground mt-1">
                  Years Experience
                </div>
              </div>

              {/* Our Experts avatars */}
              <div className="absolute bottom-6 left-6 bg-background rounded-xl shadow-lg p-4">
                <p className="text-xs font-medium text-muted-foreground mb-3">
                  Our Experts
                </p>
                <div className="flex -space-x-2">
                  {visibleMembers.map((member) => (
                    <Avatar
                      key={member.id}
                      className={`w-10 h-10 border-2 border-background ${
                        member.bgColor || ""
                      }`}
                    >
                      {member.image ? (
                        <AvatarImage src={member.image} />
                      ) : (
                        <AvatarFallback>
                          {member.name.slice(0, 2)}
                        </AvatarFallback>
                      )}
                    </Avatar>
                  ))}

                  {extraCount > 0 && (
                    <Avatar className="w-10 h-10 border-2 border-background bg-primary">
                      <AvatarFallback className="text-primary-foreground text-xs">
                        +{extraCount}
                      </AvatarFallback>
                    </Avatar>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
