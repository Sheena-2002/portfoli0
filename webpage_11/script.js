const labFiles = {
    1: { post: 'pdfs/Post_Lab_1_Sheena_S.pdf', manual: 'pdfs/Lab1.pdf' },
    2: { post: 'pdfs/Post_Lab_2_Sheena_S.pdf', manual: 'pdfs/Lab2.pdf' },
    3: { pre: 'pdfs/Pre_Lab_3_Sheena_S.pdf', post: 'pdfs/Post_Lab_3_Sheena_S.pdf', manual: 'pdfs/Lab3.pdf' },
    4: { post: 'pdfs/Post_lab_4_Sheena_S.pdf', manual: 'pdfs/Lab4.pdf' },
    5: { pre: 'pdfs/Pre_lab_5_Sheena_S.pdf', post: 'pdfs/post_lab_5_Sheena_S.pdf', manual: 'pdfs/Lab5.pdf' },
    6: { pre: 'pdfs/Pre_lab_6_Sheena_S.pdf', post: 'pdfs/Post_Lab_6_Sheena_S.pdf', manual: 'pdfs/Lab6.pdf' },
    7: { pre: 'pdfs/Pre_lab_7_Sheena_S.pdf', post: 'pdfs/Post_Lab_7_Sheena_S.pdf', manual: 'pdfs/Lab7.pdf' },
    8: { pre: 'pdfs/Pre_lab_8_Sheena_S.pdf', post: 'pdfs/Post_Lab_8_Sheena_S.pdf', manual: 'pdfs/Lab8.pdf' },
    9: { pre: 'pdfs/Pre_lab_9_Sheena_S.pdf', post: 'pdfs/Post_Lab_9_Sheena_S.pdf', manual: 'pdfs/Lab9.pdf' }
};
const projectPdf = 'pdfs/PROJECT_704_REPORT.pdf';

function openPdf(path) {
    window.open(path, '_blank');
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.lab-action-button').forEach(button => {
        button.addEventListener('click', event => {
            const labId = event.currentTarget.dataset.labId;
            const type = event.currentTarget.dataset.type;
            const files = labFiles[labId];
            if (files && files[type]) {
                openPdf(files[type]);
            }
        });
    });

    const projectButton = document.getElementById('project-button');
    projectButton.addEventListener('click', () => openPdf(projectPdf));
});

console.log('webpage_11 loaded');
