from fastapi import APIRouter

router = APIRouter(
    tags=["Info"]
)


@router.get("/")
@router.get("/home")
async def get_home_page():
    return { "data": "Home page"}


@router.get("/fee")
async def get_fee_page():
    return { "data": "Fee page"}


@router.get("/schedule")
async def get_schedule_page():
    return { "data": "Schedule page"}


@router.get("/pay")
async def get_pay_page():
    return { "data": "Pay page"}


@router.get("/cabinet")
async def get_cabinet_page():
    return { "data": "Cabinet page"}


@router.get("/guides")
async def get_guides_page():
    return { "data": "Guides page"}


@router.get("/gallery")
async def get_gallery_page():
    return { "data": "Gallery page"}
