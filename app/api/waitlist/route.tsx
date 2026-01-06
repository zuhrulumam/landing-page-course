import { NextResponse } from "next/server"

export async function POST(req: Request) {
    try {
        const { name, email } = await req.json()

        if (!email || !name) {
            return NextResponse.json(
                { error: "Name and email are required" },
                { status: 400 }
            )
        }

        const payload = {
            email,
            name,
            status: "enabled",
            lists: [Number(process.env.LISTMONK_LIST_ID)],
            preconfirm_subscriptions: true
        }

        const res = await fetch(
            `${process.env.LISTMONK_API_URL}/api/subscribers`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `token ${process.env.LISTMONK_USERNAME}:${process.env.LISTMONK_API_KEY}`
                },
                body: JSON.stringify(payload)
            }
        )

        const data = await res.json()

        if (!res.ok) {
            return NextResponse.json(
                { error: data.message || "Failed to subscribe" },
                { status: res.status }
            )
        }

        return NextResponse.json({ success: true })
    } catch (err) {
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        )
    }
}
