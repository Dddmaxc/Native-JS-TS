import {StudentType} from "../02/02"
import { CityType, GovernmnetBuildingsType, HousesType } from "../02/02_02"

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export const makeStudentActive = (student: StudentType) => {
     student.isActive = !false
}

export const doesStudentInKiev = (student: StudentType, c: string) => {
    return student.address.city.title === c
}

export const addMoneyToBudged = (build: GovernmnetBuildingsType, n: number) => {
    build.budget += n
}

export const repairHouse = (houseType: HousesType) => {
    houseType.repaired = true
}

export const toFireStaff = (building: GovernmnetBuildingsType, staffCountFire: number ) => {
    building.staffCount -= staffCountFire
}

export const toHireStaff = (building: GovernmnetBuildingsType, staffCountHire: number ) => {
    building.staffCount += staffCountHire
}

