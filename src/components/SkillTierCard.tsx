
interface SkillTierCardProps {
    title: string;
    skills: string[];
}
  
export default function SkillTierCard({ title, skills }: SkillTierCardProps) {
    return (
        <div className="bg-background border border-green-500/20 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-green-500">{title}</h2>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
            {skills.map((skill) => (
                <li key={skill} className="flex items-center text-foreground">
                <span className="inline-block w-2 h-2 mr-2 bg-green-500 rounded-full" />
                {skill}
                </li>
            ))}
            </ul>
        </div>
    );
}