import { Camera, CheckCircle, Globe, Mail, MessageCircle, Shield, Snowflake, Sun, Truck, Zap, Menu, X, Phone, MapPin } from "lucide-react";
import { Button } from "./components/Button";
import { useState } from "react";
import { ModalBody, ModalFrame, ModalHead, ModalFooter } from "./components/Modal";

export default function App() {
    const [showContactModal, setShowContactModal] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const closeContactModal = () => setShowContactModal(false);
    const openContactModal = () => setShowContactModal(true);
    const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

    const handleContactClick = (type: string, value: string) => {
        switch (type) {
            case 'email':
                window.open(`mailto:${value}`, '_blank');
                break;
            case 'phone':
                window.open(`tel:${value}`, '_blank');
                break;
            case 'whatsapp':
                window.open(`https://wa.me/${value}`, '_blank');
                break;
            case 'website':
                window.open(value, '_blank');
                break;
            default:
                break;
        }
    };

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
        setMobileMenuOpen(false);
    };

    return (
        <div className="min-h-screen bg-slate-100 font-raleway">
            {/* Header */}
            <header className="sticky top-0 z-40 h-20 px-4 lg:px-8 bg-yellow flex justify-between items-center relative">
                <h3 className="font-exwayer font-bold text-4xl">ELECCORE</h3>
                
                {/* Desktop Menu */}
                <div className="hidden md:flex gap-4">
                    <Button text="Our Services" variant="none" size="small" className="w-30" onClick={() => scrollToSection('services')} />
                    <Button text="Why Eleccore?" variant="none" size="small" className="w-30" onClick={() => scrollToSection('why-us')} />
                    <Button text="Contact Us" size="small" className="w-30" onClick={() => scrollToSection('contact')} />
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMobileMenu}
                    className="md:hidden p-2 rounded-lg hover:bg-yellow/80 transition-colors"
                >
                    {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>

                {/* Mobile Dropdown Menu */}
                {mobileMenuOpen && (
                    <div className="absolute top-full left-0 right-0 bg-yellow border-t border-yellow/20 shadow-lg z-50 md:hidden">
                        <div className="flex flex-col p-4 gap-2">
                            <button
                                onClick={() => scrollToSection('services')}
                                className="text-left py-3 px-4 hover:bg-yellow/80 rounded-lg transition-colors font-medium"
                            >
                                Our Services
                            </button>
                            <button
                                onClick={() => scrollToSection('why-us')}
                                className="text-left py-3 px-4 hover:bg-yellow/80 rounded-lg transition-colors font-medium"
                            >
                                Why Eleccore?
                            </button>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="text-left py-3 px-4 hover:bg-yellow/80 rounded-lg transition-colors font-medium"
                            >
                                Contact Us
                            </button>
                        </div>
                    </div>
                )}
            </header>

            {/* Hero */}
            <div className="min-h-[calc(100vh-5rem)] flex flex-col lg:flex-row px-4 md:px-12 lg:px-24 py-8 lg:py-0">
                <div className="min-h-[45vh] lg:min-h-[calc(100vh-5rem)] w-full lg:w-[50%] flex flex-col justify-center items-center text-center lg:text-left">
                    <h1 className="font-extrabold text-2xl md:text-3xl lg:text-6xl">
                        Your Trusted Partner for All <span className="text-5xl lg:text-7xl font-exwayer text-yellow ml-1">Electrical</span> Needs
                    </h1>

                    <h5 className="my-6 text-sm md:text-base lg:text-lg max-w-2xl">
                        Specialists in electrical installations, solar energy, CCTV security, and logistics — providing integrated solutions for homes, businesses, and industries.
                    </h5>

                    <div className="flex flex-row gap-2 sm:gap-4 w-full max-w-md lg:max-w-none">
                        <Button text="Our Services" size="xlarge" className="bg-yellow !text-black hover:bg-yellow/60" onClick={() => scrollToSection('services')} />
                        <Button text="Contact Us" size="xlarge" onClick={() => scrollToSection('contact')} />
                    </div>
                </div>
                <div className="min-h-[40vh] lg:min-h-[calc(100vh-5rem)] w-full lg:w-[50%] flex items-center justify-center lg:justify-end mt-8 lg:mt-0">
                    <img src="/eleccore.png" alt="Eleccore Services" className="border rounded-3xl border-blue/20 shadow-2xl shadow-yellow/40 max-w-full h-auto" />
                </div>
            </div>

            {/* Our Services */}
            <div id="services" className="min-h-screen flex flex-col pt-10 sm:pt-20 items-center px-8 lg:px-20">
                <h1 className="font-exwayer font-extrabold text-6xl lg:text-7xl text-yellow text-center mb-8 px-4 sm:px-0">Our Services</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl">
                    <div className="flex flex-col justify-center bg-slate-100 border rounded-3xl border-blue/20 shadow-2xl shadow-yellow/20 p-6 md:p-8 min-h-[280px]">
                        <div className="flex justify-center">
                            <Zap className="h-12 w-12 text-yellow border-2 p-2 rounded-full shadow-2xl" />
                        </div>
                        <h3 className="font-extrabold my-2 text-lg text-center">Electrical Installation</h3>
                        <p className="text-center text-sm md:text-base">Complete electrical contracting, installation, and maintenance services for residential and commercial properties.</p>
                    </div>

                    <div className="flex flex-col justify-center bg-slate-100 border rounded-3xl border-blue/20 shadow-2xl shadow-yellow/20 p-6 md:p-8 min-h-[280px]">
                        <div className="flex justify-center">
                            <Camera className="h-12 w-12 text-yellow border-2 p-2 rounded-full shadow-2xl" />
                        </div>
                        <h3 className="font-extrabold my-2 text-lg text-center">CCTV & Security Systems</h3>
                        <p className="text-center text-sm md:text-base">Professional installation of CCTV cameras, IP cameras, and comprehensive access control systems.</p>
                    </div>

                    <div className="flex flex-col justify-center bg-slate-100 border rounded-3xl border-blue/20 shadow-2xl shadow-yellow/20 p-6 md:p-8 min-h-[280px]">
                        <div className="flex justify-center">
                            <Sun className="h-12 w-12 text-yellow border-2 p-2 rounded-full shadow-2xl" />
                        </div>
                        <h3 className="font-extrabold my-2 text-lg text-center">Solar & Power Systems</h3>
                        <p className="text-center text-sm md:text-base">Solar inverter installation, power inverter systems, and renewable energy solutions for sustainable power.</p>
                    </div>

                    <div className="flex flex-col justify-center bg-slate-100 border rounded-3xl border-blue/20 shadow-2xl shadow-yellow/20 p-6 md:p-8 min-h-[280px]">
                        <div className="flex justify-center">
                            <Snowflake className="h-12 w-12 text-yellow border-2 p-2 rounded-full shadow-2xl" />
                        </div>
                        <h3 className="font-extrabold my-2 text-lg text-center">AC & Refrigeration</h3>
                        <p className="text-center text-sm md:text-base">Expert installation and maintenance of air conditioning systems and refrigeration equipment.</p>
                    </div>

                    <div className="flex flex-col justify-center bg-slate-100 border rounded-3xl border-blue/20 shadow-2xl shadow-yellow/20 p-6 md:p-8 min-h-[280px]">
                        <div className="flex justify-center">
                            <Shield className="h-12 w-12 text-yellow border-2 p-2 rounded-full shadow-2xl" />
                        </div>
                        <h3 className="font-extrabold my-2 text-lg text-center">Transformer Installation</h3>
                        <p className="text-center text-sm md:text-base">Professional transformer installation and electrical infrastructure setup for industrial applications.</p>
                    </div>

                    <div className="flex flex-col justify-center bg-slate-100 border rounded-3xl border-blue/20 shadow-2xl shadow-yellow/20 p-6 md:p-8 min-h-[280px]">
                        <div className="flex justify-center">
                            <Truck className="h-12 w-12 text-yellow border-2 p-2 rounded-full shadow-2xl" />
                        </div>
                        <h3 className="font-extrabold my-2 text-lg text-center">Logistics & Trading</h3>
                        <p className="text-center text-sm md:text-base">Logistics services, haulage, auto sales, spare parts, and import/export of general goods and services.</p>
                    </div>
                </div>
            </div>

            {/* Why Choose Us */}
            <div id="why-us" className="min-h-screen flex flex-col py-20 items-center px-4 md:px-8 lg:px-20">
                <h1 className="font-exwayer font-extrabold text-6xl lg:text-7xl text-yellow text-center mb-8 px-4 sm:px-0">The Eleccore Edge</h1>

                <div className="border rounded-3xl border-blue/20 shadow-2xl shadow-yellow/40 w-full max-w-6xl p-8 md:p-12 lg:p-16 text-center">
                    <h2 className="mb-2 font-black text-yellow uppercase text-xl md:text-2xl lg:text-3xl tracking-wider">Why choose us?</h2>
                    <p className="text-sm md:text-base lg:text-lg leading-6 md:leading-8 mb-8">
                        With years of experience in the electrical contracting industry, we have built a reputation for delivering high-quality services across multiple sectors. Our comprehensive approach covers everything from basic electrical installations to complex industrial systems.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        <div className="flex flex-col gap-4">
                            <img src="/certifiedprofessionals.jpg" alt="Licensed & Certified" className="rounded-lg w-full h-48 object-cover" />
                            <div className="flex flex-col justify-center items-center">
                                <div className="flex justify-center items-center gap-2 mb-2">
                                    <CheckCircle className="text-green-600" />
                                    <h3 className="text-lg font-semibold">Licensed & Certified</h3>
                                </div>
                                <p className="text-sm">Fully licensed electrical contractors with industry certifications</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <img src="/qualityguarantee.jpg" alt="Quality Guarantee" className="rounded-lg w-full h-48 object-cover" />
                            <div className="flex flex-col justify-center items-center">
                                <div className="flex justify-center items-center gap-2 mb-2">
                                    <CheckCircle className="text-green-600" />
                                    <h3 className="text-lg font-semibold">Quality Guarantee</h3>
                                </div>
                                <p className="text-sm">We stand behind our work with comprehensive warranties and support</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <img src="/onestopsolution.jpg" alt="Comprehensive Services" className="rounded-lg w-full h-48 object-cover" />
                            <div className="flex flex-col justify-center items-center">
                                <div className="flex justify-center items-center gap-2 mb-2">
                                    <CheckCircle className="text-green-600" />
                                    <h3 className="font-semibold">Comprehensive Services</h3>
                                </div>
                                <p className="text-sm">One-stop solution for all electrical, electronic, and contracting needs</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Us */}
            <div id="contact" className="min-h-[70vh] flex flex-col items-center px-4 md:px-8 lg:px-20 pb-10">
                <h1 className="font-exwayer font-extrabold text-6xl lg:text-7xl text-yellow text-center mb-8 px-4 sm:px-0">Contact Us</h1>

                <div className="w-full max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 text-center sm:text-left">
                        {/* Contact Information */}
                        <div className="space-y-6">
                            <div className="bg-white border rounded-3xl border-blue/20 shadow-xl p-6 md:p-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-yellow sm:mb-6">Get In Touch</h3>
                                <p className="text-gray-700 mb-8">
                                    Ready to power up your next project? Contact us today for professional electrical solutions tailored to your needs.
                                </p>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-yellow/20 p-3 rounded-full">
                                            <Phone className="h-6 w-6 text-yellow" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-800 mb-1">Phone</h4>
                                            <p className="text-gray-600">+234 803 456 7890</p>
                                            <p className="text-gray-600">+234 901 234 5678</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="bg-yellow/20 p-3 rounded-full">
                                            <Mail className="h-6 w-6 text-yellow" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                                            <p className="text-gray-600">info@eleccore.com</p>
                                            <p className="text-gray-600">projects@eleccore.com</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="bg-yellow/20 p-3 rounded-full">
                                            <MapPin className="h-6 w-6 text-yellow" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-800 mb-1">Address</h4>
                                            <p className="text-gray-600">
                                                123 Industrial Avenue<br />
                                                Ibadan, Oyo State<br />
                                                Nigeria
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white border rounded-3xl border-blue/20 shadow-xl p-6 md:p-8">
                            <h3 className="text-2xl md:text-3xl font-bold text-yellow mb-6">Send us a Message</h3>
                            
                            <form className="space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow focus:border-transparent transition-all"
                                            placeholder="John"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow focus:border-transparent transition-all"
                                            placeholder="Doe"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow focus:border-transparent transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                                    <input
                                        type="tel"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow focus:border-transparent transition-all"
                                        placeholder="+234 xxx xxx xxxx"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Service Needed</label>
                                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow focus:border-transparent transition-all">
                                        <option>Select a service</option>
                                        <option>Electrical Installation</option>
                                        <option>CCTV & Security Systems</option>
                                        <option>Solar & Power Systems</option>
                                        <option>AC & Refrigeration</option>
                                        <option>Transformer Installation</option>
                                        <option>Logistics & Trading</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                    <textarea
                                        rows={4}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow focus:border-transparent transition-all resize-none"
                                        placeholder="Tell us about your project..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-yellow hover:bg-yellow/80 text-black font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="bg-yellow text-black w-full flex flex-col sm:flex-row justify-center items-center h-auto sm:h-20 py-4 px-4">
                <p className="text-center sm:text-left">Made by</p>
                <button
                    onClick={openContactModal}
                    className="ml-0 sm:ml-1 text-light-pink hover:text-accent-pink underline underline-offset-2 hover:underline-offset-4 transition-all duration-200 font-medium"
                >
                    Ifeoluwa Folami
                </button>
            </div>

            {/* Contact Modal */}
            {showContactModal && (
                <ModalFrame onClose={closeContactModal} open={showContactModal}>
                    <ModalHead>
                        Contact Developer
                    </ModalHead>
                    <ModalBody>
                        <div className="space-y-6">
                            <div className="text-start">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Ifeoluwa Folami</h3>
                                <p className="text-gray-600 mb-4">Full Stack Developer</p>
                            </div>
                            
                            <div className="space-y-4">
                                <button
                                    onClick={() => handleContactClick('email', 'folamihephzibah@gmail.com')}
                                    className="w-full flex items-center gap-4 p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors group"
                                >
                                    <Mail className="h-5 w-5 text-gray-600 group-hover:text-accent-pink transition-colors" />
                                    <div className="text-left">
                                        <p className="font-medium text-gray-800">Email</p>
                                        <p className="text-sm text-gray-600">folamihephzibah@gmail.com</p>
                                    </div>
                                </button>

                                <button
                                    onClick={() => handleContactClick('whatsapp', '+2348138041811')}
                                    className="w-full flex items-center gap-4 p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors group"
                                >
                                    <MessageCircle className="h-5 w-5 text-gray-600 group-hover:text-accent-pink transition-colors" />
                                    <div className="text-left">
                                        <p className="font-medium text-gray-800">WhatsApp</p>
                                        <p className="text-sm text-gray-600">Send a message</p>
                                    </div>
                                </button>

                                <button
                                    onClick={() => handleContactClick('website', 'https://www.linkedin.com/in/ifeoluwafolami')}
                                    className="w-full flex items-center gap-4 p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors group"
                                >
                                    <Globe className="h-5 w-5 text-gray-600 group-hover:text-accent-pink transition-colors" />
                                    <div className="text-left">
                                        <p className="font-medium text-gray-800">LinkedIn</p>
                                        <p className="text-sm text-gray-600">www.linkedin.com/in/ifeoluwafolami</p>
                                    </div>
                                </button>
                            </div>

                            <div className="text-center pt-4 border-t border-gray-200">
                                <p className="text-sm text-gray-500">
                                    Available for freelance projects and collaborations
                                </p>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <button
                            onClick={closeContactModal}
                            className="px-6 py-2 bg-text text-white rounded-lg hover:opacity-90 transition-opacity"
                        >
                            Close
                        </button>
                    </ModalFooter>
                </ModalFrame>
            )}
        </div>
    )
}