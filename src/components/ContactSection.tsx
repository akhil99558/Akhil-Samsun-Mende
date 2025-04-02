
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Loader2, Send, Mail, Phone, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-card">
      <div className="section-container">
        <h2 className="section-title">Contact Me</h2>
        <p className="max-w-2xl mb-12 text-muted-foreground">
          Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="space-y-8">
              <h3 className="text-xl font-semibold">Get in Touch</h3>
              <p className="text-muted-foreground">
                I'm currently open for freelance work and job opportunities. Feel free to reach out if you have a project in mind or just want to say hello.
              </p>

              <div className="space-y-5">
                <div className="flex items-center group">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-secondary/10 mr-4 transition-all duration-300 group-hover:bg-secondary/20">
                    <Mail className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">Email</h4>
                    <a href="mailto:hello@example.com" className="text-primary transition-colors duration-300 hover:text-secondary">akhilsamsunmende.com</a>
                  </div>
                </div>

                <div className="flex items-center group">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-secondary/10 mr-4 transition-all duration-300 group-hover:bg-secondary/20">
                    <Phone className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">Phone</h4>
                    <a href="+91 8121 738-737" className="text-primary transition-colors duration-300 hover:text-secondary">Mail Me</a>
                  </div>
                </div>

                <div className="flex items-center group">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-secondary/10 mr-4 transition-all duration-300 group-hover:bg-secondary/20">
                    <MapPin className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">Location</h4>
                    <p className="text-primary">Hyderabad, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="transition-all duration-300 focus:border-secondary focus:ring-secondary hover:border-secondary/60"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Your Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="transition-all duration-300 focus:border-secondary focus:ring-secondary hover:border-secondary/60"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Your Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="How can I help you?"
                required
                className="min-h-[150px] transition-all duration-300 focus:border-secondary focus:ring-secondary hover:border-secondary/60"
              />
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="button-primary w-full group"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
