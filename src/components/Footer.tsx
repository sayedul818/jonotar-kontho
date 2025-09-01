import React from 'react'

const Footer = () => {
  return (
      <footer className="bg-primary text-primary-foreground mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-3 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-4">জনতার কন্ঠ</h3> 
              <p className="text-sm opacity-90 leading-relaxed">
                বাংলাদেশের অগ্রণী অনলাইন সংবাদ মাধ্যম। 
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">বিভাগসমূহ</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li><a href="#" className="hover:text-black transition-colors">জাতীয়</a></li>
                <li><a href="#" className="hover:text-black transition-colors">আন্তর্জাতিক</a></li>
                <li><a href="#" className="hover:text-black transition-colors">খেলাধুলা</a></li>
                <li><a href="#" className="hover:text-black transition-colors">বিনোদন</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">গুরুত্বপূর্ণ লিংক</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li><a href="#" className="hover:text-black transition-colors">আমাদের সম্পর্কে</a></li>
                <li><a href="#" className="hover:text-black transition-colors">যোগাযোগ</a></li>
                <li><a href="#" className="hover:text-black transition-colors">গোপনীয়তা নীতি</a></li>
                <li><a href="#" className="hover:text-black transition-colors">ব্যবহারের শর্তাবলী</a></li>
              </ul>
            </div>
            
            <div className='hidden lg:block'>
              <h4 className="font-semibold mb-4">যোগাযোগ</h4>
              <div className="space-y-2 text-sm opacity-90">
                <p>ইমেইল: info@jonotarkontho.com</p>
                <p>ফোন: +৮৮০-২-৯৮৭৬৫৪৩</p>
                <p>ঠিকানা: ঢাকা, বাংলাদেশ</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-90">
            <p>&copy; ২০২৪ জনতার কন্ঠ । সকল অধিকার সংরক্ষিত।</p>
          </div>
        </div>
      </footer>
  )
}

export default Footer