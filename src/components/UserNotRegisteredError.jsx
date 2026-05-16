export default function UserNotRegisteredError() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background">
      <div className="text-center max-w-md">
        <h1 className="text-2xl font-bold mb-4">ยังไม่ได้ลงทะเบียน</h1>
        <p className="text-gray-600 mb-6">
          บัญชีของคุณยังไม่ได้ลงทะเบียนในระบบ กรุณาติดต่อผู้ดูแลระบบ
        </p>
        <button 
          onClick={() => window.location.href = '/'}
          className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
        >
          กลับไปหน้าหลัก
        </button>
      </div>
    </div>
  );
}
