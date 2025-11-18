"use client";

import member from "@/data/team/asgor-hossain";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/navigation";
import { Button, Row, Col, Typography, Tag, Avatar } from "antd";
import {
  Award,
  Calendar,
  MapPin,
  ExternalLink,
  Users,
  Briefcase,
  Code,
  Rocket,
  BookOpen,
  CheckCircle,
  FlaskConical,
  Hourglass,
  GraduationCap,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

const { Title, Paragraph, Text } = Typography;

export default function AsgorPortfolioPage() {
  const [expandedFeatures, setExpandedFeatures] = useState({});

  const toggleFeatures = (projectIndex) => {
    setExpandedFeatures((prev) => ({
      ...prev,
      [projectIndex]: !prev[projectIndex],
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      {/* Profile Header */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
        <div className="container mx-auto px-4">
          <Row gutter={[32, 32]} align="middle">
            <Col xs={24} md={8} className="text-center">
              <Avatar size={200} src={member.image} className="mb-4" />
            </Col>
            <Col xs={24} md={16}>
              <Title level={1} className="text-white text-4xl font-bold mb-2">
                {member.name}
              </Title>
              <Title
                level={3}
                className="text-blue-200 text-2xl font-medium mb-4"
              >
                {member.role}
              </Title>
              <Paragraph className="text-blue-100 text-lg mb-6">
                {member.bio}
              </Paragraph>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-blue-100">
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

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Skills Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Code className="h-5 w-5 mr-2" />
                  Technical Skills & Expertise
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="text-sm">
                      {skill.name || skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Work History Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  Professional Experience
                </CardTitle>
              </CardHeader>

              <CardContent>
                <div className="relative">
                  {/* Continuous vertical line */}
                  <div className="absolute left-[13px] top-0 bottom-0 w-0.5 bg-blue-600"></div>

                  {member.workHistory.map((job, index) => (
                    <div
                      key={index}
                      className="relative flex items-start mb-8 last:mb-0"
                    >
                      {/* Timeline icon */}
                      <div className="relative z-10 bg-blue-600 p-2 rounded-full flex-shrink-0">
                        <Briefcase className="h-4 w-4 text-white" />
                      </div>

                      <div className="flex-1 p-5 bg-white">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {job.title}
                        </h3>
                        <div className="text-blue-600 font-medium text-base">
                          {job.company}
                        </div>

                        <div className="flex flex-wrap gap-4 mt-2 text-gray-600 text-sm">
                          <span className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {job.period}
                          </span>
                          <span className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {job.location}
                          </span>
                        </div>

                        {job.description && (
                          <p className="text-gray-600 leading-relaxed mt-3 mb-4">
                            {job.description}
                          </p>
                        )}

                        {/* Key Achievements */}
                        {job.achievements && job.achievements.length > 0 && (
                          <div className="mb-4">
                            <Text strong className="text-gray-900 block mb-2">
                              Key Achievements:
                            </Text>
                            <ul className="space-y-2">
                              {job.achievements.map((achievement, achIndex) => (
                                <li key={achIndex} className="flex items-start">
                                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                  <Text className="text-gray-600">
                                    {achievement}
                                  </Text>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Technologies & Tools */}
                        {job.technologies && job.technologies.length > 0 && (
                          <div>
                            <Text strong className="text-gray-900">
                              Technologies & Tools:
                            </Text>
                            <div className="flex flex-wrap gap-2 mt-2">
                              {job.technologies.map((tech, techIndex) => (
                                <Tag key={techIndex} color="blue">
                                  {tech}
                                </Tag>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Featured Projects Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Rocket className="h-5 w-5 mr-2" />
                  Featured Projects
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-8">
                {member.projects.map((project, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-4 p-5 rounded-xl border border-gray-200 shadow-sm bg-white"
                  >
                    {/* Image Section */}
                    <div className="relative w-full">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-64 object-cover rounded-lg"
                        onError={(e) => {
                          e.target.src =
                            "/placeholder.svg?height=256&width=400&text=" +
                            encodeURIComponent(project.title);
                        }}
                      />
                      {project.url && (
                        <Button
                          asChild
                          className="absolute top-4 right-4 bg-green-600 hover:bg-green-700"
                        >
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-4 w-4 mr-1" /> View Live
                          </a>
                        </Button>
                      )}
                    </div>

                    {/* Details Section */}
                    <div className="flex flex-col">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-4 text-base">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      {project.technologies.length > 0 && (
                        <div className="mb-4">
                          <span className="font-semibold text-gray-900">
                            Technologies:
                          </span>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {project.technologies.map((tech, i) => (
                              <Badge
                                key={i}
                                variant="secondary"
                                className="text-green-700"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Key Features */}
                      <div>
                        <Text strong className="text-gray-900 block mb-2">
                          Key Features:
                        </Text>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {(expandedFeatures[index]
                            ? project.features
                            : project.features.slice(0, 4)
                          ).map((feature, featureIndex) => (
                            <div
                              key={featureIndex}
                              className="flex items-start"
                            >
                              <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                              <Text className="text-gray-600 text-sm">
                                {feature}
                              </Text>
                            </div>
                          ))}
                        </div>
                        {project.features.length > 4 && (
                          <Button
                            type="link"
                            size="small"
                            onClick={() => toggleFeatures(index)}
                            className="text-purple-600 p-0 h-auto mt-2"
                          >
                            {expandedFeatures[index]
                              ? `Show Less`
                              : `+${project.features.length - 4} more features`}
                          </Button>
                        )}
                      </div>

                      {/* Achievements */}
                      {project.achievements &&
                        project.achievements.length > 0 && (
                          <div className="mb-4">
                            <span className="font-semibold text-gray-900 block mb-2">
                              Achievements:
                            </span>
                            <ul className="space-y-1">
                              {project.achievements.map((a, i) => (
                                <li key={i} className="flex items-start">
                                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-2"></div>
                                  <span className="text-gray-600 text-sm">
                                    {a}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                      {/* Impact */}
                      {project.impact && (
                        <div className="bg-green-50 p-4 rounded-lg">
                          <span className="font-semibold text-green-800">
                            Impact:{" "}
                          </span>
                          <span className="text-green-700">
                            {project.impact}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* publications */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Publications
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-8">
                {/* Published Papers */}
                {member.publications.published?.length > 0 && (
                  <div>
                    <div className="flex items-center mb-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                      <h3 className="text-lg font-semibold text-gray-900">
                        Published Papers
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {member.publications.published.map((pub, i) => (
                        <li key={i} className="flex items-start">
                          <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3"></div>
                          <span className="text-gray-700 text-sm">{pub}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Preprints */}
                {member.publications.preprints?.length > 0 && (
                  <div>
                    <div className="flex items-center mb-3">
                      <FlaskConical className="h-5 w-5 text-blue-600 mr-2" />
                      <h3 className="text-lg font-semibold text-gray-900">
                        Preprints
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {member.publications.preprints.map((pub, i) => (
                        <li key={i} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                          <span className="text-gray-700 text-sm">{pub}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Under Review */}
                {member.publications.underReview?.length > 0 && (
                  <div>
                    <div className="flex items-center mb-3">
                      <Hourglass className="h-5 w-5 text-yellow-600 mr-2" />
                      <h3 className="text-lg font-semibold text-gray-900">
                        Under Review
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {member.publications.underReview.map((pub, i) => (
                        <li key={i} className="flex items-start">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3"></div>
                          <span className="text-gray-700 text-sm">{pub}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            {/* Education & Achievements Section */}
            <Card className="border-l-4 border-l-purple-600 shadow-sm">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-gray-900">
                  Education
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-6">
                {member.education.map((edu, index) => (
                  <div key={index} className="flex items-start">
                    <GraduationCap className="h-6 w-6 mt-1 mr-3 flex-shrink-0 text-primary" />

                    <div>
                      <Title
                        level={4}
                        className="text-lg font-semibold text-gray-900 mb-2"
                      >
                        {edu.degree}
                      </Title>

                      {edu.department && (
                        <Text className="text-purple-600 font-medium block mb-1">
                          {edu.department}
                        </Text>
                      )}

                      {edu.secondMajor && (
                        <Text className="text-purple-600 font-medium block mb-1">
                          {edu.secondMajor}
                        </Text>
                      )}

                      <div className="mt-2 text-gray-600">
                        <div>{edu.institution}</div>
                        <div>
                          {edu.period} | {edu.location}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Key Achievements Card */}
            <Card className="border-l-4 border-l-yellow-500 shadow-sm">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-gray-900">
                  Key Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {member.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start">
                      <Award className="h-6 w-6 text-yellow-500 mt-1 mr-3 flex-shrink-0" />
                      <Text className="text-gray-700">{achievement}</Text>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="border-l-4 border-l-purple-600 shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Quick Stats
                </CardTitle>
              </CardHeader>

              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Experience</span>
                    <span className="font-semibold">
                      {member.experience}+ Years
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Projects</span>
                    <span className="font-semibold">
                      {member.projects.length}+ Major
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Skills</span>
                    <span className="font-semibold">
                      {member.skills.length}+ Technologies
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
