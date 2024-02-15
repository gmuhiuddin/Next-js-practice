import React from 'react';
import { getMemes } from '@/config/api';
import Link from 'next/link';

async function detail({params : { id } }) {

    const res = await getMemes();

    const result = res.data.memes.filter(element => element.id == id);

  return (
    <div>
      <Link href={'/'}>back</Link>
    </div>
  )
}

export default detail;
