/// <reference types="vite/client" />

interface INotes {
    id?: number,
    content: string
}

interface IApiRequest {
    id?: number | string,
    url: string,
    action: string,
    data?: INotes,
    callback: (data: INotes[]) => void
}

interface IApiCreateRequest {
    method: string,
    url: string,
    body?: INotes,
    callback: (data: INotes[]) => void
}