import { Button } from "@/components/ui/button"

export function CtaBanner() {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(/bacground.jpg)" }} />
      <div className="absolute inset-0 bg-[#0B6EF3] opacity-90" />

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-20 w-16 h-16 border-2 border-white rotate-45" />
        <div className="absolute bottom-10 right-32 w-12 h-12 border-2 border-white rotate-12" />
        <div className="absolute top-1/2 right-1/4 w-8 h-8 bg-white rounded-full" />
        <div className="absolute bottom-1/4 left-1/3 w-6 h-6 bg-white" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          We're always ready to assist you, so feel free to contact us anytime
        </h2>
        <Button
          variant="outline"
          size="lg"
          className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary"
        >
          Contact us
        </Button>
      </div>
    </section>
  )
}
