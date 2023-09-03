import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

const bcrypt = require('bcryptjs');

export async function POST(request: Request) {
  const res = await request.json();
  const { name, email, password } = res;
  try {
    const hash = bcrypt.hashSync(password, 6);
    const user = await prisma.user.create({
      data: {
        name: name,
        email: email,
        password: hash,
      },
    });
    const newUser = {
      id: user.id,
      email: user.email,
      name: user.name,
      image: user.image,
    };
    return NextResponse.json(newUser, { status: 201 });
  } catch (err) {
    if (err.code === 'P2002') {
      return NextResponse.json(
        'The email or username is already registed try another',
        { status: 401 }
      );
    } else {
      return NextResponse.json(
        'An error occured while trying to accomplish the task. Please try again',
        { status: 401 }
      );
    }
  }
}
