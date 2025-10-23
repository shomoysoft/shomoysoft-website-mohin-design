"use client"

import { Button, Card, Row, Col, Typography, Tag, Avatar } from "antd"
import { ArrowLeft, Award, Calendar, MapPin, ExternalLink, Monitor, Palette } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import tasfia from "@/data/team/tasfia-rahman"

const { Title, Paragraph, Text } = Typography

export default function UIUXDesignerPortfolioPage() {
  const member = tasfia;

  const [expandedFeatures, setExpandedFeatures] = useState({})

  const toggleFeatures = (projectIndex) => {
    setExpandedFeatures((prev) => ({
      ...prev,
      [projectIndex]: !prev[projectIndex],
    }))
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/">
              <Button type="text" icon={<ArrowLeft className="h-4 w-4" />}>
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Profile Header */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Row gutter={[32, 32]} align="middle">
            <Col xs={24} md={8} className="text-center">
              <Avatar size={200} src={member.image} className="mb-4" />
            </Col>
            <Col xs={24} md={16}>
              <Title level={1} className="text-white text-4xl font-bold mb-2">
                {member.name}
              </Title>
              <Title level={3} className="text-purple-200 text-2xl font-medium mb-4">
                {member.role}
              </Title>
              <Paragraph className="text-purple-100 text-lg mb-6">{member.bio}</Paragraph>
              <div className="flex flex-wrap gap-4 text-purple-100">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  {member.location}
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  {member.experience}
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Title level={2} className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Design Skills & Expertise
          </Title>
          <Row gutter={[24, 24]}>
            {member.skills.map((skill, index) => (
              <Col xs={24} sm={12} lg={8} key={index}>
                <Card className="h-full">
                  <div className="flex justify-between items-center mb-2">
                    <Text strong>{skill.name}</Text>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Title level={2} className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Featured Design Projects
          </Title>
          <div className="space-y-12">
            {member.projects.map((project, index) => (
              <Card key={index} className="shadow-lg border-l-4 border-l-purple-600 overflow-hidden">
                <Row gutter={[32, 32]} align="middle">
                  <Col xs={24} lg={10}>
                    <div className="relative">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-64 object-cover rounded-lg shadow-md"
                        onError={(e) => {
                          e.target.src =
                            "/placeholder.svg?height=256&width=400&text=" + encodeURIComponent(project.title)
                        }}
                      />
                      <div className="absolute top-4 right-4">
                        <Button
                          type="primary"
                          icon={<ExternalLink className="h-4 w-4" />}
                          href={project.url}
                          target="_blank"
                          className="bg-purple-600 hover:bg-purple-700"
                        >
                          View on Behance
                        </Button>
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <Tag color="purple" className="text-sm">
                          {project.category}
                        </Tag>
                      </div>
                    </div>
                  </Col>
                  <Col xs={24} lg={14}>
                    <div className="h-full flex flex-col">
                      <Title level={3} className="text-xl font-semibold text-gray-900 mb-3">
                        {project.title}
                      </Title>
                      <Paragraph className="text-gray-600 mb-4 text-base flex-grow">{project.description}</Paragraph>

                      <div className="mb-4">
                        <Text strong className="text-gray-900">
                          Design Tools:
                        </Text>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {project.tools.map((tool, toolIndex) => (
                            <Tag key={toolIndex} color="purple">
                              {tool}
                            </Tag>
                          ))}
                        </div>
                      </div>

                      <div className="mb-4">
                        <Text strong className="text-gray-900 block mb-2">
                          Key Features:
                        </Text>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {(expandedFeatures[index] ? project.features : project.features.slice(0, 6)).map(
                            (feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-start">
                                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                                <Text className="text-gray-600 text-sm">{feature}</Text>
                              </div>
                            ),
                          )}
                        </div>
                        {project.features.length > 6 && (
                          <Button
                            type="link"
                            size="small"
                            onClick={() => toggleFeatures(index)}
                            className="text-purple-600 p-0 h-auto mt-2"
                          >
                            {expandedFeatures[index] ? `Show Less` : `+${project.features.length - 6} more features`}
                          </Button>
                        )}
                      </div>

                      {project.targetUsers && (
                        <div className="mb-4">
                          <Text strong className="text-gray-900">
                            Target Users:
                          </Text>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {project.targetUsers.map((user, userIndex) => (
                              <Tag key={userIndex} color="geekblue">
                                {user}
                              </Tag>
                            ))}
                          </div>
                        </div>
                      )}

                      {project.impact && (
                        <div className="bg-purple-50 p-4 rounded-lg">
                          <Text strong className="text-purple-800">
                            Impact:{" "}
                          </Text>
                          <Text className="text-purple-700">{project.impact}</Text>
                        </div>
                      )}
                    </div>
                  </Col>
                </Row>

                {/* Design Process Section */}
                {project.designProcess && (
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <Text strong className="text-gray-900 block mb-3">
                      Design Process:
                    </Text>
                    <Row gutter={[16, 16]}>
                      {project.designProcess.map((step, stepIndex) => (
                        <Col xs={24} sm={12} lg={8} key={stepIndex}>
                          <div className="flex items-start">
                            <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3 flex-shrink-0">
                              {stepIndex + 1}
                            </div>
                            <Text className="text-gray-600 text-sm">{step}</Text>
                          </div>
                        </Col>
                      ))}
                    </Row>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Design Philosophy Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Row gutter={[48, 48]}>
            <Col xs={24} lg={12}>
              <Title level={2} className="text-3xl font-bold text-gray-900 mb-8">
                Design Philosophy
              </Title>
              <div className="space-y-4">
                {member.designPhilosophy.map((principle, index) => (
                  <Card key={index} className="border-l-4 border-l-pink-500">
                    <div className="flex items-start">
                      <Palette className="h-6 w-6 text-pink-500 mt-1 mr-3 flex-shrink-0" />
                      <Text className="text-gray-700">{principle}</Text>
                    </div>
                  </Card>
                ))}
              </div>
            </Col>

            <Col xs={24} lg={12}>
              <Title level={2} className="text-3xl font-bold text-gray-900 mb-8">
                Design Tools & Technologies
              </Title>
              <div className="space-y-4">
                {member.tools.map((tool, index) => (
                  <Card key={index} className="border-l-4 border-l-blue-500">
                    <div className="flex items-start">
                      <Monitor className="h-6 w-6 text-blue-500 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <Text strong className="text-gray-900 block">
                          {tool.name}
                        </Text>
                        <Text className="text-gray-600 text-sm">{tool.description}</Text>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Title level={2} className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Professional Achievements
          </Title>
          <Row gutter={[24, 24]}>
            {member.achievements.map((achievement, index) => (
              <Col xs={24} sm={12} key={index}>
                <Card className="h-full border-l-4 border-l-green-500">
                  <div className="flex items-start">
                    <Award className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <Text className="text-gray-700">{achievement}</Text>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>
    </div>
  )
}


