import { PageLayout } from '../components/PageLayout';
import { Image, ExternalLink, FolderOpen } from 'lucide-react';

const PhotosPage = () => {
  const drivePhotosUrl = "https://drive.google.com/drive/folders/YOUR_PHOTOS_FOLDER_ID";

  return (
    <PageLayout title="Family Moments">
      <div className="space-y-8" data-testid="photos-page">
        {/* Hero Card */}
        <div className="bg-white dark:bg-[#16161A] border border-[#E8E4DC] dark:border-[#232328] rounded-2xl p-8 text-center transition-colors duration-300">
          <div className="w-16 h-16 rounded-2xl bg-[#F5F2EB] dark:bg-[#1F1F23] flex items-center justify-center mx-auto mb-6">
            <Image className="text-[#8B7D5E] dark:text-[#C9B896]" size={32} strokeWidth={1.5} />
          </div>
          
          <h2 className="font-bold text-[#2D2D2D] dark:text-[#E8DCC4] text-2xl mb-2">
            Family Memories
          </h2>
          <p className="text-[#7A7A7A] dark:text-[#908C84] mb-6 max-w-md mx-auto">
            Captured moments that tell our story. Access our shared photo collection.
          </p>
          
          <a
            href={drivePhotosUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="photos-drive-link"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#8B7D5E] dark:bg-[#C9B896] text-white dark:text-[#0D0D0F] rounded-lg font-bold hover:opacity-90 transition-all"
          >
            <FolderOpen size={18} />
            Open Photo Album
          </a>
        </div>

        {/* Quick Access */}
        <div className="grid grid-cols-2 gap-4">
          <a
            href={drivePhotosUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white dark:bg-[#16161A] border border-[#E8E4DC] dark:border-[#232328] rounded-2xl p-5 hover:border-[#C9B896] transition-all"
            data-testid="photos-recent-link"
          >
            <div className="w-10 h-10 rounded-xl bg-[#F5F2EB] dark:bg-[#1F1F23] flex items-center justify-center mb-4">
              <Image className="text-[#8B7D5E] dark:text-[#C9B896]" size={20} strokeWidth={1.5} />
            </div>
            <h3 className="font-bold text-[#2D2D2D] dark:text-[#E8DCC4] text-sm mb-1">
              Recent Photos
            </h3>
            <p className="text-[#9A9A9A] dark:text-[#6B6B70] text-xs">
              View latest uploads
            </p>
          </a>

          <a
            href={drivePhotosUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white dark:bg-[#16161A] border border-[#E8E4DC] dark:border-[#232328] rounded-2xl p-5 hover:border-[#C9B896] transition-all"
            data-testid="photos-albums-link"
          >
            <div className="w-10 h-10 rounded-xl bg-[#F5F2EB] dark:bg-[#1F1F23] flex items-center justify-center mb-4">
              <FolderOpen className="text-[#7A7A7A] dark:text-[#6B6B70]" size={20} strokeWidth={1.5} />
            </div>
            <h3 className="font-bold text-[#2D2D2D] dark:text-[#E8DCC4] text-sm mb-1">
              Albums
            </h3>
            <p className="text-[#9A9A9A] dark:text-[#6B6B70] text-xs">
              Browse by event
            </p>
          </a>
        </div>

        {/* Info */}
        <div className="p-6 rounded-xl bg-[#F5F2EB] dark:bg-[#1A1A1E] border border-[#E8E4DC] dark:border-[#232328] transition-colors duration-300">
          <p className="text-[#5A5A5A] dark:text-[#908C84] text-sm">
            All family photos are stored securely in Google Drive. 
            Sign in with your Google account to access the full collection.
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default PhotosPage;
