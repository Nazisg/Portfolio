import avatar from '@/shared/media/imgs/my-avatar.png'

export default function Sidebar() {
  return (
    <div className=" flex flex-col justify-center items-center sticky top-4 p-5 bg-primary-bg max-h-screen h-full border border-[#383838] rounded-xl text-white w-64">
      <div className='flex flex-col justify-center items-center gap-2'>
        <div className="rounded-3xl bg-gray-400 w-36">
          <img src={avatar} className='w-36' />
        </div>
          <h1 className='text-head-color text-2xl text-center'>Nazrin Isgandarova</h1>
          <p className='bg-[#2b2b2c] text-xs text-[#ffff] py-2 px-4 rounded-lg'>Frontend Developer</p>
      </div>
    </div>
  )
}
