import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// import CKFinder from "@ckeditor/ckeditor5-adapter-ckfinder";
// import CKFinder from "@ckeditor/ckeditor5-ckfinder/src/ckfinder";

ClassicEditor.create(document.querySelector("#editor"), {
    // plugins: [CKFinder],
    // toolbar: ["uploadImage"],
    ckfinder: {
        uploadUrl:
            "http://localhost:8080/js/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images&responseType=json",
    },
})
    .then((editor) => {
        console.log(editor);
    })
    .catch((error) => {
        console.error(error);
    });
