"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button, Modal, Input, Form } from "antd";
import { ArrowLeft } from "lucide-react";
import { softwareServices, aiServices } from "@/data/services";
import LoaderLink from "@/components/LoaderLink";
import { useState } from "react";
import { showToast } from "@/lib/toast";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";

export default function ServicesPage() {
  const [open, setOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const handleRequestService = (serviceTitle) => {
    setSelectedService(serviceTitle);
    setOpen(true);
  };

  const handleSendRequest = async (values) => {
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          message: `Service Requested: ${selectedService}\n\n${values.message}`,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        showToast("success", "Message sent successfully");
        form.resetFields();
        setOpen(false); // ✅ Hide modal on success
      } else {
        showToast("error", data.message || "Something went wrong");
      }
    } catch (err) {
      console.error(err);
      showToast("error", "Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
          <div className="container mx-auto pb-6 pt-0 text-white">
            <LoaderLink href="/">
              <Button
                type="text"
                style={{ color: "#fff" }}
                icon={<ArrowLeft className="h-4 w-4" />}
              >
                Back to Home
              </Button>
            </LoaderLink>
          </div>
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl">
              Comprehensive software development and AI solutions to transform
              your business and drive innovation.
            </p>
          </div>
        </div>

        {/* Software Development Services */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Software Development Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {softwareServices.map((service, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-shadow duration-300 h-full"
                >
                  <CardHeader>
                    <div className="text-blue-600 mb-4">{service.icon}</div>
                    <CardTitle className="text-xl mb-2">
                      {service.title}
                    </CardTitle>
                    <p className="text-gray-600">{service.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="border-t pt-4">
                      {/* 🟦 Price hidden */}
                      {/* <p className="font-semibold text-gray-900 mb-4">{service.price}</p> */}
                      <Button
                        type="primary"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-md hover:shadow-lg transition-all duration-300"
                        onClick={() => handleRequestService(service.title)}
                      >
                        Request Service
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* AI Services */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              AI Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-shadow duration-300 h-full"
                >
                  <CardHeader>
                    <div className="text-purple-600 mb-4">{service.icon}</div>
                    <CardTitle className="text-xl mb-2">
                      {service.title}
                    </CardTitle>
                    <p className="text-gray-600">{service.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="border-t pt-4">
                      {/* 🟪 Price hidden */}
                      {/* <p className="text-lg font-semibold text-gray-900 mb-4">{service.price}</p> */}
                      <Button
                        type="primary"
                        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium shadow-md hover:shadow-lg transition-all duration-300"
                        onClick={() => handleRequestService(service.title)}
                      >
                        Request Service
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <Footer></Footer>
        {/* Request Service Modal */}
        <Modal
          title={
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Request a Quote
              </h2>
              <p className="text-gray-500 text-sm mt-1">
                Fill out the form below, and our team will get back to you
                shortly.
              </p>
            </div>
          }
          open={open}
          onCancel={() => setOpen(false)}
          footer={null}
          centered
          width={500}
          styles={{ body: { paddingTop: 8 } }}
        >
          <Form layout="vertical" form={form} onFinish={handleSendRequest}>
            {/* Name */}
            <Form.Item
              label={<span className="font-semibold">Your Name</span>}
              name="name"
              rules={[{ required: true, message: "Please enter your name" }]}
            >
              <Input
                placeholder="Enter your full name"
                size="large"
                className="rounded-lg"
              />
            </Form.Item>

            {/* Email */}
            <Form.Item
              label={<span className="font-semibold">Your Email</span>}
              name="email"
              rules={[
                { required: true, message: "Please enter your email" },
                { type: "email", message: "Enter a valid email" },
              ]}
            >
              <Input
                placeholder="Enter your email address"
                size="large"
                className="rounded-lg"
              />
            </Form.Item>

            {/* Message */}
            <Form.Item
              label={<span className="font-semibold">Project Details</span>}
              name="message"
              rules={[
                {
                  required: true,
                  message: "Please enter your project details",
                },
              ]}
            >
              <Input.TextArea
                placeholder="Tell us about your project..."
                rows={6}
                className="rounded-lg"
              />
            </Form.Item>

            {/* Submit Button */}
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                block
                size="large"
                className="py-4 text-white font-semibold"
              >
                Send Request
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </>
  );
}
