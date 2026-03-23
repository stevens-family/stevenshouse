import { PageLayout } from '../components/PageLayout';
import { Upload, CloudUpload, Camera, FolderUp } from 'lucide-react';

const UploadPage = () => {
  const uploadFolderUrl = "https://drive.google.com/drive/folders/YOUR_UPLOAD_FOLDER_ID";

  return (
    <PageLayout title="Add Memories">
      <div className="space-y-8" data-testid="upload-page">
        {/* Main Upload Card */}
        <div className="luxury-card p-8 text-center">
          <div className="w-16 h-16 rounded-2xl bg-gold-dim flex items-center justify-center mx-auto mb-6">
            <CloudUpload className="text-gold" size={32} strokeWidth={1.5} />
          </div>
          
          <h2 className="font-heading font-bold text-primary text-2xl mb-2">
            Share Your Photos
          </h2>
          <p className="text-secondary mb-6 max-w-md mx-auto">
            Add new photos to our family collection. Upload directly to our shared folder.
          </p>
          
          <a
            href={uploadFolderUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="upload-drive-link"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-[var(--bg-primary)] rounded-lg font-bold hover:opacity-90 transition-luxury"
          >
            <Upload size={20} />
            Open Upload Folder
          </a>
        </div>

        {/* Quick Tips */}
        <div className="grid grid-cols-2 gap-4">
          <div className="luxury-card p-5">
            <div className="w-10 h-10 rounded-xl bg-[var(--bg-secondary)] flex items-center justify-center mb-4">
              <Camera className="text-secondary" size={20} strokeWidth={1.5} />
            </div>
            <h3 className="font-heading font-bold text-primary text-sm mb-1">
              From Phone
            </h3>
            <p className="text-secondary text-xs">
              Upload from camera roll
            </p>
          </div>

          <div className="luxury-card p-5">
            <div className="w-10 h-10 rounded-xl bg-[var(--bg-secondary)] flex items-center justify-center mb-4">
              <FolderUp className="text-secondary" size={20} strokeWidth={1.5} />
            </div>
            <h3 className="font-heading font-bold text-primary text-sm mb-1">
              Multiple Files
            </h3>
            <p className="text-secondary text-xs">
              Select multiple photos
            </p>
          </div>
        </div>

        {/* Instructions */}
        <div className="luxury-card p-6">
          <h3 className="font-heading font-bold text-primary mb-4">How to Upload</h3>
          <ol className="text-secondary text-sm space-y-3">
            {[
              'Click "Open Upload Folder" above',
              'Sign in to Google if prompted',
              'Click the "+ New" button in Google Drive',
              'Select "File upload" and choose your photos'
            ].map((step, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gold-dim text-gold flex items-center justify-center text-xs font-bold">
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
