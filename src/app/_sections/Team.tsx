import { MARKETING_DATA } from "@/data/marketing"
import { Award, GraduationCap } from "lucide-react"
import Image from "next/image"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { BadgeLabel } from "@/components/ui/badge-label"

export const Team = () => {
  const teams = MARKETING_DATA.teamSection

  return (
    <section className="section bg-secondary/50" id="team">
      <div className="container mx-auto px-4">
        <div className="mb-10 md:mb-20">
          <BadgeLabel label={teams.label} />
          <h2 className="font-heading my-2 text-2xl font-bold md:my-3 md:text-3xl lg:text-4xl">
            {teams.title}
          </h2>
          <p className="max-w-2xl text-sm text-gray-600 md:text-base">
            {teams.description}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 md:gap-6 xl:grid-cols-3">
          {teams.teams.map((team, index) => (
            <div
              key={index}
              className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg"
            >
              <div className="relative h-64 w-full overflow-hidden">
                {team.imageUrl ? (
                  <Image
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    src={team.imageUrl}
                    alt={`${team.name} - ${team.role}`}
                    height={400}
                    width={400}
                  />
                ) : (
                  <Avatar className="h-full w-full">
                    <AvatarFallback className="h-full w-full bg-gradient-to-br from-primary/10 to-primary/20 text-5xl font-bold uppercase text-primary/60">
                      {(() => {
                        const names = team.name.split(" ")
                        return names[0][0] + names[names.length - 1][0]
                      })()}
                    </AvatarFallback>
                  </Avatar>
                )}
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="mb-4">
                  <h3 className="mb-1 text-xl font-bold text-gray-900">
                    {team.name}
                  </h3>
                  <p className="text-sm font-medium text-primary">
                    {team.role}
                  </p>
                </div>

                <div className="mb-4 space-y-2 border-b border-gray-100 pb-4">
                  {team.credentials && (
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4" />
                      <p className="text-sm text-gray-600">
                        {team.credentials}
                      </p>
                    </div>
                  )}
                  {team.education && (
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4" />
                      <p className="text-sm text-gray-600">{team.education}</p>
                    </div>
                  )}
                </div>

                <p className="text-sm leading-relaxed text-gray-600">
                  {team.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
