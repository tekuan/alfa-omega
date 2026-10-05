import type { Member } from '../../data/members'

interface MemberCardProps {
    member: Member
}

export default function MemberCard({ member }: MemberCardProps) {
    return (
        <article className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
            <div className="aspect-[4/5] overflow-hidden">
                <img
                    src={member.image}
                    alt={`${member.name} - ${member.instrument}`}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
            </div>

            <div className="p-5">
                <h3 className="text-lg font-semibold text-white">
                    {member.name}
                </h3>

                <p className="mt-1 text-sm text-amber-400">
                    {member.instrument}
                </p>
            </div>
        </article>
    )
}