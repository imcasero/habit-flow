// src/app/api/habits/route.ts
import { GetHabits } from "@/core/application/GetHabit";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("userId");

  if (!userId)
    return NextResponse.json({ error: "User ID is required" }, { status: 400 });

  try {
    const habits = await GetHabits.execute(userId);
    return NextResponse.json(habits);
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "An unknown error occurred",
      },
      { status: 500 }
    );
  }
}
