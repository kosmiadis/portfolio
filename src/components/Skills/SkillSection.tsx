import { motion } from 'motion/react';
import { SkillsType } from "./Skills"

interface SkillSectionI {
    skillSection: SkillsType
}

export default function SkillSection ({ skillSection }: SkillSectionI) {
    
    
    return <div className="gap-4 w-full">
        <h2 className="font-lexend-deca font-semibold mb-2">{skillSection.category}</h2>
        {/* bg-secondary  */}
        <div className='border-secondary border-4 rounded-xl text-black font-lexend-deca font-semibold p-4 flex flex-wrap justify-around gap-10'>
            {skillSection.technologies.map((technology, index) => <motion.div key={technology.tag} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: index * 0.2}} className="flex flex-col items-center gap-2">
                <div className="w-[60px] selection:bg-transparent">{technology.icon}</div>
                <span className='selection:bg-transparent'>{technology.tag}</span>
            </motion.div>)}
        </div>
    </div>
}