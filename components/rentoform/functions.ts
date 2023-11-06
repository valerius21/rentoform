import { atom, useAtom } from "jotai";
import { idTag } from ".";

export function scrollToSection(section: string) {
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
}

const idSelectorExpression = `[id^="${idTag}-"]`;

export function findSectionsWithIds() {
    const sections = document.querySelectorAll(idSelectorExpression);
    const sectionIds = Array.from(sections).map(section => section.id);
    return sectionIds;
}

export function findCurrentSection() {
    // Find the section that is currently in view
    const sections = document.querySelectorAll(idSelectorExpression);
    let currentSection = '';
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight / 2) {
            currentSection = section.id;
        }
    });
    return currentSection;
}

interface RentoFormCoreAtom {
    currentSection: string;
    sections: string[];
}

const rentoFormAtom = atom<RentoFormCoreAtom>({
    currentSection: '',
    sections: [],
})

export function useRentoFormAtom() {
    const [value, setValue] = useAtom(rentoFormAtom);

    const previousSection = () => {
        const currentSectionIndex = value.sections.indexOf(value.currentSection);
        if (currentSectionIndex > 0) {
            setValue({ ...value, currentSection: value.sections[currentSectionIndex - 1] });
        }
        scrollToSection(value.sections[currentSectionIndex - 1]);
    }

    const nextSection = () => {
        const currentSectionIndex = value.sections.indexOf(value.currentSection);
        if (currentSectionIndex < value.sections.length - 1) {
            setValue({ ...value, currentSection: value.sections[currentSectionIndex + 1] });
        }
        scrollToSection(value.sections[currentSectionIndex + 1]);
    }

    return {
        value,
        setValue,
        previousSection,
        nextSection,
    }
}

