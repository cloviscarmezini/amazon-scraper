import { NextResponse } from "next/server";

import { adminDb } from "../../../firebaseAdmin";

export async function POST(request: Request) {
  try {
    const { search } = await request.json();

    const response = await fetch(
      "https://api.brightdata.com/dca/trigger?collector=c_lft03jhbl1gdzqne4&queue_next=1",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.BRIGHT_DATA_APIKEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          search,
        }),
      }
    );

    const data = await response.json();

    const { collection_id, start_eta } = data;

    await adminDb.collection("searches").doc(collection_id).set({
      search,
      start_eta,
      status: "pending",
      updatedAt: start_eta,
    });

    return NextResponse.json({
      collection_id,
      start_eta,
    });
  } catch (error: any) {
    console.log("ERROR IS >>>>", error);

    return new Response(
      JSON.stringify({
        error: error.message,
      }),
      {
        status: 500,
      }
    );
  }
}
