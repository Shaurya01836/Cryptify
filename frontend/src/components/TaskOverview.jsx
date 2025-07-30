"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import { Input } from "./ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Badge } from "./ui/badge"
import { Search, Star, Clock, CheckCircle, Play, TrendingUp, Award, Plus } from "lucide-react"

const taskData = {
  Available: [
    {
      id: 1,
      title: "Smart Contract Security Audit",
      organization: "DeFi Protocol",
      description: "Comprehensive security audit for our new lending protocol smart contracts.",
      price: "3.5 ETH",
      type: "MILESTONE",
      urgent: true,
      duration: "2-3 weeks",
      skills: ["Solidity", "Security", "DeFi"],
    },
    {
      id: 2,
      title: "NFT Marketplace Frontend",
      organization: "CryptoArt Studio",
      description: "Build a modern React frontend for NFT trading platform with Web3 integration.",
      price: "2.8 ETH",
      type: "SINGLE",
      urgent: false,
      duration: "1-2 weeks",
      skills: ["React", "Web3", "TypeScript"],
    },
    {
      id: 3,
      title: "DeFi Yield Farming Protocol",
      organization: "Yield Labs",
      description: "Develop smart contracts for automated yield farming and liquidity mining.",
      price: "4.2 ETH",
      type: "MILESTONE",
      urgent: true,
      duration: "3-4 weeks",
      skills: ["Solidity", "DeFi", "Smart Contracts"],
    },
    {
      id: 4,
      title: "Cross-chain Bridge Development",
      organization: "Bridge Protocol",
      description: "Create secure cross-chain bridge for token transfers between networks.",
      price: "5.1 ETH",
      type: "MILESTONE",
      urgent: false,
      duration: "4-5 weeks",
      skills: ["Blockchain", "Security", "Cross-chain"],
    },
  ],
  Pending: [
    {
      id: 5,
      title: "DAO Governance System",
      organization: "Governance Labs",
      description: "Implement voting mechanisms and proposal system for decentralized governance.",
      price: "3.8 ETH",
      type: "MILESTONE",
      status: "Under Review",
      appliedDate: "2 days ago",
      skills: ["Governance", "Smart Contracts"],
    },
    {
      id: 6,
      title: "Token Staking Platform",
      organization: "Stake Protocol",
      description: "Build staking interface with reward calculation and withdrawal features.",
      price: "2.5 ETH",
      type: "SINGLE",
      status: "Awaiting Response",
      appliedDate: "1 day ago",
      skills: ["Frontend", "DeFi"],
    },
    {
      id: 7,
      title: "DEX Aggregator Interface",
      organization: "Swap Labs",
      description: "Create user interface for decentralized exchange aggregation service.",
      price: "3.2 ETH",
      type: "SINGLE",
      status: "Interview Scheduled",
      appliedDate: "3 days ago",
      skills: ["React", "DeFi", "UI/UX"],
    },
  ],
  Active: [
    {
      id: 8,
      title: "Lending Protocol Audit",
      organization: "Secure Finance",
      description: "Ongoing security audit for lending protocol smart contracts and documentation.",
      price: "4.5 ETH",
      type: "MILESTONE",
      progress: 65,
      deadline: "5 days left",
      skills: ["Security", "Audit"],
    },
    {
      id: 9,
      title: "Web3 Wallet Integration",
      organization: "Wallet Connect",
      description: "Integrate multiple wallet providers into existing DeFi application.",
      price: "1.8 ETH",
      type: "SINGLE",
      progress: 80,
      deadline: "2 days left",
      skills: ["Web3", "Integration"],
    },
    {
      id: 10,
      title: "GameFi Token Economics",
      organization: "Game Protocol",
      description: "Design and implement tokenomics for play-to-earn gaming platform.",
      price: "3.7 ETH",
      type: "MILESTONE",
      progress: 40,
      deadline: "1 week left",
      skills: ["Tokenomics", "GameFi"],
    },
  ],
  Completed: [
    {
      id: 11,
      title: "Flash Loan Arbitrage Bot",
      organization: "Arbitrage Labs",
      description: "Developed automated arbitrage bot using flash loans across DEX platforms.",
      price: "2.9 ETH",
      type: "SINGLE",
      completedDate: "1 week ago",
      rating: 5,
      skills: ["Bot Development", "DeFi"],
    },
    {
      id: 12,
      title: "Multi-sig Wallet Contract",
      organization: "Security First",
      description: "Created secure multi-signature wallet with advanced permission controls.",
      price: "3.6 ETH",
      type: "MILESTONE",
      completedDate: "2 weeks ago",
      rating: 5,
      skills: ["Security", "Smart Contracts"],
    },
    {
      id: 13,
      title: "Prediction Market Platform",
      organization: "Predict Protocol",
      description: "Built decentralized prediction market with automated settlement system.",
      price: "4.1 ETH",
      type: "MILESTONE",
      completedDate: "3 weeks ago",
      rating: 4,
      skills: ["Smart Contracts", "DeFi"],
    },
  ],
}

export default function TaskOverview() {
  const [activeTab, setActiveTab] = useState("overview")
  const [searchQuery, setSearchQuery] = useState("")
  const [filterType, setFilterType] = useState("all")

  const availableCount = taskData.Available.length
  const pendingCount = taskData.Pending.length
  const activeCount = taskData.Active.length
  const completedCount = taskData.Completed.length

  const tabs = [
    {
      id: "overview",
      label: "Overview",
      icon: TrendingUp,
      description: "Dashboard & Analytics",
      count: null,
      color: "blue",
    },
    {
      id: "available",
      label: "Available Tasks",
      icon: Search,
      description: "Open Opportunities",
      count: availableCount,
      color: "emerald",
    },
    {
      id: "pending",
      label: "Pending Applications",
      icon: Clock,
      description: "Awaiting Response",
      count: pendingCount,
      color: "amber",
    },
    {
      id: "active",
      label: "Active Tasks",
      icon: Play,
      description: "In Progress",
      count: activeCount,
      color: "violet",
    },
    {
      id: "completed",
      label: "Completed Tasks",
      icon: CheckCircle,
      description: "Finished Work",
      count: completedCount,
      color: "emerald",
    },
  ]

  const getTabColorClasses = (color, isActive) => {
    const colors = {
      blue: isActive
        ? "bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-hover)] text-white shadow-lg shadow-[var(--color-primary)]/25"
        : "text-[var(--color-muted)] hover:text-[var(--color-foreground)] hover:bg-[var(--color-primary)]/10",
      amber: isActive
        ? "bg-gradient-to-r from-amber-600 to-amber-500 text-white shadow-lg shadow-amber-500/25"
        : "text-[var(--color-muted)] hover:text-[var(--color-foreground)] hover:bg-amber-500/10",
      emerald: isActive
        ? "bg-gradient-to-r from-[var(--color-success)] to-emerald-500 text-white shadow-lg shadow-[var(--color-success)]/25"
        : "text-[var(--color-muted)] hover:text-[var(--color-foreground)] hover:bg-[var(--color-success)]/10",
      violet: isActive
        ? "bg-gradient-to-r from-violet-600 to-violet-500 text-white shadow-lg shadow-violet-500/25"
        : "text-[var(--color-muted)] hover:text-[var(--color-foreground)] hover:bg-violet-500/10",
    }
    return colors[color] || colors.blue
  }

  const renderTaskCard = (task) => {
    return (
      <Card
        key={task.id}
        className="bg-[var(--color-surface)] border-[var(--color-border)] backdrop-blur-sm hover:shadow-lg hover:shadow-[var(--color-primary)]/10 transition-all duration-300 hover:border-[var(--color-primary)]/30 relative overflow-hidden"
      >
        {task.urgent && (
          <div className="absolute top-4 right-4 z-10">
            <Badge className="bg-[var(--color-error)]/20 text-red-300 border-[var(--color-error)]/30 border rounded-full text-xs font-semibold">
              Urgent
            </Badge>
          </div>
        )}
        <CardContent className="p-6">
          <div className="flex">
            <div className="flex-1 pr-4">
              <h3 className="text-lg font-bold text-[var(--color-foreground)] mb-1 font-display">{task.title}</h3>
              <p className="text-sm font-semibold text-[var(--color-muted)] mb-3 font-sans">{task.organization}</p>
              <p className="text-sm text-[var(--color-muted)] mb-4 leading-relaxed font-sans">{task.description}</p>

              {/* Skills */}
              {task.skills && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {task.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="border-[var(--color-border)] text-[var(--color-muted)] bg-[var(--color-surface)] text-xs"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              )}

              {/* Status-specific content */}
              {activeTab === "available" && (
                <div className="space-y-3">
                  <div className="flex items-center gap-4 text-[var(--color-muted)] text-xs">
                    <span>Duration: {task.duration}</span>
                  </div>
                  <p className="text-2xl font-bold text-[var(--color-success)] font-display">{task.price}</p>
                  <Button className="w-full bg-gradient-to-r from-[var(--color-success)] to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white shadow-lg shadow-[var(--color-success)]/25 hover:shadow-[var(--color-success)]/40 transition-all duration-200 font-semibold">
                    Request to Join
                  </Button>
                </div>
              )}

              {activeTab === "pending" && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge className="bg-amber-500/20 text-amber-300 border-amber-500/30 border font-semibold">
                      {task.status}
                    </Badge>
                    <span className="text-xs text-[var(--color-muted)]">Applied {task.appliedDate}</span>
                  </div>
                  <p className="text-2xl font-bold text-amber-300 font-display">{task.price}</p>
                  <Button
                    variant="outline"
                    className="w-full border-[var(--color-border)] text-[var(--color-muted)] hover:bg-amber-500/10 hover:border-amber-500/50 bg-transparent font-semibold"
                  >
                    View Application
                  </Button>
                </div>
              )}

              {activeTab === "active" && (
                <div className="space-y-3">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-[var(--color-muted)]">Progress</span>
                      <span className="text-violet-300 font-bold">{task.progress}%</span>
                    </div>
                    <div className="w-full bg-[var(--color-border)] rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-violet-600 to-violet-500 h-2 rounded-full transition-all duration-300 shadow-md"
                        style={{ width: `${task.progress}%` }}
                      />
                    </div>
                    <span className="text-xs text-[var(--color-muted)]">{task.deadline}</span>
                  </div>
                  <p className="text-2xl font-bold text-violet-300 font-display">{task.price}</p>
                  <Button className="w-full bg-gradient-to-r from-violet-600 to-violet-500 hover:from-violet-700 hover:to-violet-600 text-white shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-all duration-200 font-semibold">
                    Continue Work
                  </Button>
                </div>
              )}

              {activeTab === "completed" && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < (task.rating || 0) ? "text-[var(--color-success)] fill-[var(--color-success)]" : "text-[var(--color-border)]"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-[var(--color-muted)]">Completed {task.completedDate}</span>
                  </div>
                  <p className="text-2xl font-bold text-[var(--color-success)] font-display">{task.price}</p>
                  <Button
                    variant="outline"
                    className="w-full border-[var(--color-border)] text-[var(--color-muted)] hover:bg-[var(--color-success)]/10 hover:border-[var(--color-success)]/50 bg-transparent font-semibold"
                  >
                    View Details
                  </Button>
                </div>
              )}
            </div>
            {/* Vertical Text */}
            <div className="flex items-center">
              <div className="transform rotate-90 origin-center">
                <span className="text-xs font-bold text-[var(--color-border)] tracking-wider whitespace-nowrap font-sans">
                  {task.type}
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  const renderOverviewTab = () => (
    <div className="space-y-8">
      {/* Recent Activity */}
      <Card className="bg-[var(--color-surface)] border-[var(--color-border)] backdrop-blur-sm">
        <CardContent className="p-6">
          <h3 className="text-xl font-bold text-[var(--color-foreground)] mb-6 font-display">Recent Activity</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-[var(--color-background)] rounded-lg border border-[var(--color-border)]">
              <div className="bg-[var(--color-success)]/20 p-2 rounded-lg border border-[var(--color-success)]/30">
                <CheckCircle className="w-5 h-5 text-[var(--color-success)]" />
              </div>
              <div className="flex-1">
                <p className="text-[var(--color-foreground)] font-semibold">Task Completed</p>
                <p className="text-[var(--color-muted)] text-sm">Flash Loan Arbitrage Bot - 2.9 ETH earned</p>
              </div>
              <span className="text-[var(--color-border)] text-xs">1 week ago</span>
            </div>
            <div className="flex items-center gap-4 p-4 bg-[var(--color-background)] rounded-lg border border-[var(--color-border)]">
              <div className="bg-amber-500/20 p-2 rounded-lg border border-amber-500/30">
                <Clock className="w-5 h-5 text-amber-300" />
              </div>
              <div className="flex-1">
                <p className="text-[var(--color-foreground)] font-semibold">Application Submitted</p>
                <p className="text-[var(--color-muted)] text-sm">Token Staking Platform - Awaiting response</p>
              </div>
              <span className="text-[var(--color-border)] text-xs">1 day ago</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  return (
    <div className="min-h-screen text-[var(--color-foreground)] font-sans bg-[var(--color-background)]">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-10 gap-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold text-[var(--color-foreground)] font-display mb-1">Task Overview</h1>
            <p className="text-[var(--color-muted)] text-lg font-sans">
              Manage your freelance tasks, track progress, and discover new opportunities
            </p>
          </div>
          <div className="flex gap-3">
            <Button className="bg-gradient-to-r from-[var(--color-success)] to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white shadow-lg shadow-[var(--color-success)]/25 hover:shadow-[var(--color-success)]/40 transition-all duration-200 font-semibold">
              <Plus className="w-4 h-4 mr-2" />
              Browse Tasks
            </Button>
          </div>
        </div>

        {/* Stats Cards (always visible) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <Card className="bg-gradient-to-br from-[var(--color-success)]/20 to-[var(--color-success)]/10 border-[var(--color-success)]/30 backdrop-blur-sm hover:shadow-lg hover:shadow-[var(--color-success)]/10 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-[var(--color-success)] text-sm font-semibold tracking-wide">AVAILABLE TASKS</p>
                  <p className="text-4xl font-bold text-[var(--color-foreground)]">{taskData.Available.length}</p>
                  <p className="text-[var(--color-success)]/70 text-xs">Ready to apply</p>
                </div>
                <div className="bg-[var(--color-success)]/20 p-4 rounded-xl border border-[var(--color-success)]/30">
                  <Search className="w-7 h-7 text-[var(--color-success)]" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-amber-500/20 to-amber-500/10 border-amber-500/30 backdrop-blur-sm hover:shadow-lg hover:shadow-amber-500/10 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-amber-300 text-sm font-semibold tracking-wide">PENDING APPLICATIONS</p>
                  <p className="text-4xl font-bold text-[var(--color-foreground)]">{taskData.Pending.length}</p>
                  <p className="text-amber-300/70 text-xs">Awaiting response</p>
                </div>
                <div className="bg-amber-500/20 p-4 rounded-xl border border-amber-500/30">
                  <Clock className="w-7 h-7 text-amber-300" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-violet-500/20 to-violet-500/10 border-violet-500/30 backdrop-blur-sm hover:shadow-lg hover:shadow-violet-500/10 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-violet-300 text-sm font-semibold tracking-wide">ACTIVE TASKS</p>
                  <p className="text-4xl font-bold text-[var(--color-foreground)]">{taskData.Active.length}</p>
                  <p className="text-violet-300/70 text-xs">In progress</p>
                </div>
                <div className="bg-violet-500/20 p-4 rounded-xl border border-violet-500/30">
                  <Play className="w-7 h-7 text-violet-300" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-primary)]/10 border-[var(--color-primary)]/30 backdrop-blur-sm hover:shadow-lg hover:shadow-[var(--color-primary)]/10 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-[var(--color-primary)] text-sm font-semibold tracking-wide">TOTAL EARNED</p>
                  <p className="text-4xl font-bold text-[var(--color-foreground)]">45.7 ETH</p>
                  <p className="text-[var(--color-primary)]/70 text-xs">All time earnings</p>
                </div>
                <div className="bg-[var(--color-primary)]/20 p-4 rounded-xl border border-[var(--color-primary)]/30">
                  <Award className="w-7 h-7 text-[var(--color-primary)]" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filters (always visible) */}
        <Card className="bg-[var(--color-surface)] border-[var(--color-border)] backdrop-blur-sm mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[var(--color-muted)] w-5 h-5" />
                  <Input
                    placeholder="Search tasks by title, organization, or skills..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 h-12 bg-[var(--color-background)] border-[var(--color-border)] focus:border-[var(--color-primary)] text-[var(--color-foreground)] placeholder:text-[var(--color-muted)] text-base"
                  />
                </div>
              </div>
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger className="w-full md:w-52 h-12 bg-[var(--color-background)] border-[var(--color-border)] text-[var(--color-foreground)]">
                  <SelectValue placeholder="Filter by type" />
                </SelectTrigger>
                <SelectContent className="bg-[var(--color-surface)] border-[var(--color-border)]">
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="SINGLE">Single Task</SelectItem>
                  <SelectItem value="MILESTONE">Milestone</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Enhanced Tab Navigation */}
        <div className="mb-8">
          <div className="bg-[var(--color-surface)] backdrop-blur-xl border border-[var(--color-border)] rounded-2xl p-2 shadow-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2">
              {tabs.map((tab) => {
                const Icon = tab.icon
                const isActive = activeTab === tab.id
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative flex items-center gap-3 px-4 py-4 rounded-xl font-semibold transition-all duration-300 group ${getTabColorClasses(tab.color, isActive)}`}
                  >
                    <div
                      className={`p-2 rounded-lg transition-all duration-300 ${
                        isActive ? "bg-white/20" : "bg-[var(--color-border)]/50 group-hover:bg-[var(--color-border)]/70"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="text-left flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold">{tab.label}</span>
                        {tab.count !== null && tab.count > 0 && (
                          <span
                            className={`text-xs px-2 py-1 rounded-full ${isActive ? "bg-white/20" : "bg-[var(--color-border)]/50"}`}
                          >
                            {tab.count}
                          </span>
                        )}
                      </div>
                      <div
                        className={`text-xs transition-all duration-300 ${
                          isActive ? "text-white/80" : "text-[var(--color-muted)] group-hover:text-[var(--color-foreground)]"
                        }`}
                      >
                        {tab.description}
                      </div>
                    </div>
                    {isActive && (
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/5 to-white/10 animate-pulse" />
                    )}
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div className="transition-all duration-500">
          {activeTab === "overview" && renderOverviewTab()}
          {activeTab === "available" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">{taskData.Available.map(renderTaskCard)}</div>
          )}
          {activeTab === "pending" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">{taskData.Pending.map(renderTaskCard)}</div>
          )}
          {activeTab === "active" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">{taskData.Active.map(renderTaskCard)}</div>
          )}
          {activeTab === "completed" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">{taskData.Completed.map(renderTaskCard)}</div>
          )}
        </div>
      </div>
    </div>
  )
}