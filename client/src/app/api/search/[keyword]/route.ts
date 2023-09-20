import { searchUser } from '@/service/user';
import { NextRequest, NextResponse } from 'next/server';

interface Context {
  params: { keyword: string };
}

export async function GET(req: NextRequest, context: Context) {
  return searchUser(context.params.keyword).then((data) => NextResponse.json(data));
}
