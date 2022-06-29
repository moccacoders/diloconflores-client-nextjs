import path from "path"

export default function handler(req, res) {
    const { path: urlPath, ...params } = req.query
    Object.entries(params).map(([key, val]) => {
        if (val === "") params[key] = true
        return true
    })
    const query = new URLSearchParams(params).toString().replaceAll("=true", "")
    const url =
        path.join(process.env.API_ENDPOINT, urlPath.join("/")) + `?` + query

    const headers = new Headers({
        Authorization: `Bearer ${process.env.API_TOKEN}`,
        Accept: "application/json",
    })

    return fetch(url, {
        method: req.method,
        headers,
    })
        .then((response) => {
            res.status(response.status)
            return response.json()
        })
        .then((response) => res.json(response))
        .catch((err) => console.log("err", err))
}
