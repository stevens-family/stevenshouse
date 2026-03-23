import { PageLayout } from '../components/PageLayout';
import { Upload, CloudUpload, Camera, FolderUp } from 'lucide-react';

const UploadPage = () => {
  const uploadFolderUrl = "https://drive.google.com/drive/folders/YOUR_UPLOAD_FOLDER_ID";

  return (
    <PageLayout title="Add Memories">
      <div className="space-y-8" data-testid="upload-page">
        {/* Main Upload Card */}
        <div className="bg-white dark:bg-[#16161A] border border-[#E8E4DC] dark:border-[#232328] rounded-2xl p-8 text-center transition-colors duration-300">
          <div className="w-16 h-16 rounded-2xl bg-[#F5F2EB] dark:bg-[#1F1F23] flex items-center justify-center mx-auto mb-6">
            <CloudUpload className="text-[#8B7D5E] dark:text-[#C9B896]" size={32} strokeWidth={1.5} />
          </div>
          
          <h2 className="font-bold text-[#2D2D2D] dark:text-[#E8DCC4] text-2xl mb-2">
            Share Your Photos
          </h2>
          <p className="text-[#7A7A7A] dark:text-[#908C84] mb-6 max-w-md mx-auto">
            Add new photos to our family collection. Upload directly to our shared folder.
          </p>
          
          <a
            href={uploadFolderUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="upload-drive-link"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#8B7D5E] dark:bg-[#C9B896] text-white dark:text-[#0D0D0F] rounded-lg font-bold hover:opacity-90 transition-all"
          >
            <Upload size={20} />
            Open Upload Folder
          </a>
        </div>

        {/* Quick Tips */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white dark:bg-[#16161A] border border-[#E8E4DC] dark:border-[#232328] rounded-2xl p-5 transition-colors duration-300">
            <div className="w-10 h-10 rounded-xl bg-[#F5F2EB] dark:bg-[#1F1F23] flex items-center justify-center mb-4">
              <Camera className="text-[#7A7A7A] dark:text-[#6B6B70]" size={20} strokeWidth={1.5} />
            </div>
            <h3 className="font-bold text-[#2D2D2D] dark:text-[#E8DCC4] text-sm mb-1">
              From Phone
            </h3>
            <p className="text-[#9A9A9A] dark:text-[#6B6B70] text-xs">
              Upload from camera roll
            </p>
          </div>

          <div className="bg-white dark:bg-[#16161A] border border-[#E8E4DC] dark:border-[#232328] rounded-2xl p-5 transition-colors duration-300">
            <div className="w-10 h-10 rounded-xl bg-[#F5F2EB] dark:bg-[#1F1F23] flex items-center justify-center mb-4">
              <FolderUp className="text-[#7A7A7A] dark:text-[#6B6B70]" size={20} strokeWidth={1.5} />
            </div>
            <h3 className="font-bold text-[#2D2D2D] dark:text-[#E8DCC4] text-sm mb-1">
              Multiple Files
            </h3>
            <p className="text-[#9A9A9A] dark:text-[#6B6B70] text-xs">
              Select multiple photos
            </p>
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-white dark:bg-[#16161A] border border-[#E8E4DC] dark:border-[#232328] rounded-2xl p-6 transition-colors duration-300">
          <h3 className="font-bold text-[#2D2D2D] dark:text-[#E8DCC4] mb-4">How to Upload</h3>
          <ol className="text-[#5A5A5A] dark:text-[#908C84] text-sm space-y-3">
            {['Click "Open Upload Folder" above', 'Sign in to Google if prompted', 'Click the "+ New" button in Google Drive', 'Select "File upload" and choose your photos'].map((step, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#F5F2EB] dark:bg-[#1F1F23] text-[#8B7D5E] dark:text-[#C9B896] flex items-center justify-center text-xs font-bold">
                  {index + 1}
                </span>
                <span className="pt-0.5">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </PageLayout>
  );
};

export default UploadPage;
