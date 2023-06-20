import type { NextApiRequest, NextApiResponse } from "next";
import { JSDOM } from "jsdom";

export default async function teetimes(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    if (req.method === "GET") {
        try {
            const response = await fetch(
                "https://secure.east.prophetservices.com/WilliamDevine/(S(owq1akz22mgd0htmlbi01rzn))/Home/nIndex?CourseId=1&Date=2023-6-20",
            );
            const htmlString = await response.text();
            const dom = new JSDOM(htmlString);
            const document = dom.window.document;

            const slots = document.querySelectorAll("a.teetime:not(.special)");
            const slotsArray: HTMLElement[] = Array.from(slots);
            const slotsArrayText = slotsArray
                .map((slot) => {
                    const time = slot.querySelector(".timeDiv > span");
                    const timeText = time?.innerHTML.trim();

                    const players = slot.querySelector(".player > p");
                    const playerText = players?.textContent;
                    let playerMax = 0;
                    switch (playerText) {
                        case "Single Only":
                            playerMax = 1;
                            break;
                        case "1 to 2 Players":
                            playerMax = 2;
                            break;
                        case "2 to 3 Players":
                            playerMax = 3;
                            break;
                        case "2 to 4 Players":
                            playerMax = 4;
                            break;
                    }

                    if (
                        timeText == null ||
                        playerMax == null ||
                        playerMax < 1
                    ) {
                        return null;
                    }

                    return { time: timeText, players: playerMax };
                })
                .filter((slot) => slot != null);
            res.status(200).json({ data: slotsArrayText });
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    } else {
        res.status(405).json("Method not allow on resource.");
    }
}
