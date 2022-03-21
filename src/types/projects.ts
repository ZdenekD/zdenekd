export type IProject = {
    id: string
    title: string
    url: string
    tools: string[]
    locale: {
        [key: string]: {
            description: string
        }
    }
}

export type IProjects = IProject[];
